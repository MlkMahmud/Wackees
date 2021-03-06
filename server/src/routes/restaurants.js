import express from 'express';
import controllers from '../controllers/restaurants';
import verifyToken from '../helpers/verifyToken';
import imageUploader from '../helpers/imageUploader';


const router = express.Router();
const {
  fetchAllMeals,
  addNewMeal,
  updateMeal,
  deleteMeal,
  getMenu,
  getOrders,
  updateProfilePhoto,
} = controllers;

router.route('/api/v1/meals')
  .get(verifyToken, fetchAllMeals)
  .post(verifyToken, imageUploader, addNewMeal);

router.route('/api/v1/meals/:id')
  .put(verifyToken, imageUploader, updateMeal)
  .delete(verifyToken, deleteMeal);

router.route('/api/v1/menu').get(verifyToken, getMenu);

router.route('/api/v1/orders').get(verifyToken, getOrders);
router.route('/api/v1/upload').post(verifyToken, imageUploader, updateProfilePhoto);

export default router;
