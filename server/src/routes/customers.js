import express from 'express';
import customer from '../controllers/customers';

const router = express.Router({ mergeParams: true });
const { createNewCustomer } = customer;

router.route('/api/v1/auth/customers/register')
  .post(createNewCustomer);

export default router;
