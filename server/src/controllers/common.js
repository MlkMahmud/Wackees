import bcrypt from 'bcryptjs';
import sequelize from 'sequelize';
import jwt from 'jsonwebtoken';
import { Restaurant } from '../models/Restaurant';
import isValidEmail from '../utils/email-validator';
import isValidPassword from '../utils/password-validator';
import isValidName from '../utils/username-validator';
import { Customer } from '../models/Customer';

const { Op } = sequelize;

async function fetchAllRestaurants(req, res) {
  try {
    const restaurants = await Restaurant.findAll({
      attributes: ['name', 'id', 'email', 'image'],
    });

    res.status(200).json(restaurants);
  } catch (e) {
    res.status(500).json('Error connecting to server');
  }
}

async function createNewUser(req, res) {
  const { role } = req.params;
  let Model;
  if (role === 'restaurant') Model = Restaurant;
  else if (role === 'customer') Model = Customer;
  else return res.status(404).json('Error!');

  const { name, email, password } = req.body;

  if (isValidName(name) && isValidEmail(email) && isValidPassword(password, name)) {
    try {
      const userAlreadyExists = await Model.findOne({
        where: { [Op.or]: [{ email }, { name }] },
      });

      if (userAlreadyExists) return res.status(400).json({ message: `${role} with given email/name already exists` });

      const user = await Model.create({
        name,
        email,
        password: bcrypt.hashSync(password),
      });
        //  SIGN A TOKEN WITH THE NEW USER'S DISTINCT ID AND SEND IT AS A COOKIE
      const token = await jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET,
        { expiresIn: '24h' },
      );

      const payload = {
        name: user.name,
        email: user.email,
        image: user.image,
      };
      if (role === 'restaurant') payload.menu = user.menu;
      else payload.cart = user.cart;
      return res
        .status(201)
        .cookie('token', token, { httpOnly: true })
        .json(payload);
    } catch (e) {
      return res.status(500).json(e);
    }
  } else {
    const error = {};
    if (!isValidName(name)) error.message = 'Name cannot be blank or contain alphanumeric characters';
    else if (!isValidEmail(email)) error.message = 'Please provide a valid email address.';
    else if (!isValidPassword(password, name)) error.message = "Password must contain at least 8 characters not including user's name";
    return res.status(400).json(error);
  }
}

async function login(req, res) {
  const { role } = req.params;
  let Model;
  if (role === 'restaurant') Model = Restaurant;
  else if (role === 'customer') Model = Customer;
  else return res.status(404).json('Error!');

  const { email, password } = req.body;

  try {
    const user = await Model.findOne({
      where: { email },
    });

    if (!user) return res.status(400).json({ message: `Can't find a ${role} with the given email address.` });
    const isVerified = bcrypt.compareSync(password, user.password);
    if (isVerified) {
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' });
      const payload = {
        name: user.name,
        email: user.email,
        image: user.image,
      };
      if (role === 'restaurant') payload.menu = user.menu;
      else payload.cart = user.cart;
      return res
        .status(200)
        .cookie('token', token, { httpOnly: true })
        .json(payload);
    }
    return res.status(400).json({ message: 'Incorrect password.' });
  } catch (e) {
    return res.status(500).json(e);
  }
}

function logOut(req, res) {
  res.clearCookie('token').json('Logged out');
}

export default {
  fetchAllRestaurants,
  createNewUser,
  login,
  logOut,
};
