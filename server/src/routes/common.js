import express from 'express';
import controllers from '../controllers/common';

const router = express.Router();

const {
  fetchAllRestaurants,
  createNewUser,
  login,
  logOut,
} = controllers;

router.route('/api/v1/restaurants').get(fetchAllRestaurants);

router.route('/api/v1/auth/register/:role').post(createNewUser);

router.route('/api/v1/auth/login/:role').post(login);

router.route('/api/v1/auth/logout').get(logOut);

export default router;
