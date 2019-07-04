import express from 'express';
import customer from '../controllers/customers';

const router = express.Router();
const {
  createNewCustomer,
  login,
} = customer;

router.route('/api/v1/auth/register/customers').post(createNewCustomer);

router.route('/api/v1/auth/login/customers').post(login);

export default router;
