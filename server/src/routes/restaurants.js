import express from 'express';
import controllers from '../controllers/restaurants';
import verifyToken from '../utils/middleware/verifyToken';
import imageUploader from '../utils/middleware/imageUploader';


const router = express.Router();
const {
  fetchAllMeals,
  addNewMeal,
  updateMeal,
  deleteMeal,
  getMenu,
  setMenu,
  getOrders,
  updateProfilePhoto,
} = controllers;

router.route('/api/v1/meals')
  .get(verifyToken, fetchAllMeals)
  .post(verifyToken, imageUploader, addNewMeal);

router.route('/api/v1/meals/:id')
  .put(verifyToken, imageUploader, updateMeal)
  .delete(verifyToken, deleteMeal);

router.route('/api/v1/menu')
  .get(verifyToken, getMenu)
  .post(verifyToken, setMenu);

router.route('/api/v1/orders').get(verifyToken, getOrders);
router.route('/api/v1/upload').post(verifyToken, imageUploader, updateProfilePhoto);

export default router;
