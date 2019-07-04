import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import sequelize from 'sequelize';
import { Restaurant } from '../models/Restaurant';
import { Customer, Order } from '../models/Customer';
import isValidEmail from '../utils/email-validator';
import isValidPassword from '../utils/password-validator';
import isValidName from '../utils/username-validator';

const { Op } = sequelize;

async function createNewCustomer(req, res) {
  const { name, email, password } = req.body;
  if (
    isValidName(name)
    && isValidEmail(email)
    && isValidPassword(password, name)
  ) {
    try {
      const userAlreadyExists = await Customer.findOne({
        where: { [Op.or]: [{ email }, { name }] },
      });
      if (userAlreadyExists) return res.status(400).json({ message: 'User with given email/name already exists' });
      const customer = await Customer.create({
        name,
        email,
        password: bcrypt.hashSync(password),
      });

      // CREATE A TOKEN WITH THE NEW USER'S DETAILS AND SEND IT AS A COOKIE
      const token = jwt.sign({ id: customer.id }, process.env.JWT_SECRET, {
        expiresIn: '24h',
      });
      return res
        .status(201)
        .cookie('token', token, { httpOnly: true })
        .json({
          name: customer.name,
          email: customer.email,
          image: customer.image,
          cart: customer.cart,
        });
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
  const { email, password } = req.body;

  try {
    const customer = await Customer.findOne({
      where: { email },
    });

    if (!customer) return res.status(400).json({ message: "Can't find a customer with the given email address." });
    const isVerified = bcrypt.compareSync(password, customer.password);
    if (isVerified) {
      const token = jwt.sign({ id: customer.id }, process.env.JWT_SECRET, { expiresIn: '24h' });
      return res
        .status(200)
        .cookie('token', token, { httpOnly: true })
        .json({
          name: customer.name,
          email: customer.email,
          image: customer.image,
          cart: customer.cart,
        });
    }
    return res.status(400).json({ message: 'Incorrect password.' });
  } catch (e) {
    return res.status(500).json(e);
  }
}

export default {
  createNewCustomer,
  login,
};
