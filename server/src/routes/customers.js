import express from 'express';
import customer from '../controllers/customers';

const router = express.Router();
const { createNewCustomer } = customer;

router.route('/api/v1/auth/register/customers')
  .post(createNewCustomer);

export default router;
