import express from 'express';
import controllers from '../controllers/common';

const router = express.Router();

const {
  fetchAllRestaurants,
  createNewUser,
  login,
} = controllers;

router.route('/api/v1/restaurants').get(fetchAllRestaurants);

router.route('/api/v1/auth/register/:role').post(createNewUser);

router.route('/api/v1/auth/login/:role').post(login);

export default router;
