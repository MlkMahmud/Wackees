import { Router } from 'express';
import controllers from '../controllers/customers';
import verifyToken from '../helpers/verifyToken';

const router = Router();

const {
  getCart,
  addToCart,
  removeFromCart,
  checkOut,
  getOrderHistory,
} = controllers;

router.route('/api/v1/cart').get(verifyToken, getCart);

router.route('/api/v1/restaurants/:id/:item').post(verifyToken, addToCart);

router.route('/api/v1/cart/:id').delete(verifyToken, removeFromCart);

router.route('/api/v1/checkout').get(verifyToken, checkOut);

router.route('/api/v1/history').get(verifyToken, getOrderHistory);

export default router;
