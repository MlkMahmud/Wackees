import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import sequelize from 'sequelize';
import { Restaurant } from '../models/Restaurant';
import { Customer, Order } from '../models/Customer';
import isValidEmail from '../utils/email-validator';
import isValidPassword from '../utils/password-validator';

const { Op } = sequelize;

async function createNewCustomer(req, res) {
  const { name, email, password } = req.body;
  if (
    name
    && isValidEmail(email)
    && isValidPassword(password, name)
  ) {
    try {
      const userAlreadyExists = await Customer.findOne({
        where: { [Op.or]: [{ email }, { name }] },
      });
      if (userAlreadyExists) res.status(500).json('User with given email/name already exists');
      else {
        const customer = await Customer.create({
          name,
          email,
          password: bcrypt.hashSync(password),
        });

        // CREATE A TOKEN WITH THE NEW USER'S DETAILS AND SEND IT AS A COOKIE
        const token = jwt.sign({ id: customer.id }, process.env.JWT_SECRET, { expiresIn: '24h' });
        res
          .status(201)
          .cookie('token', token, { httpOnly: true })
          .json({
            name: customer.name,
            email: customer.email,
            image: customer.image,
            cart: customer.cart,
          });
      }
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default {
  createNewCustomer,
};
