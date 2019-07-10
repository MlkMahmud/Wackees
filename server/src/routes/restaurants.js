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
} = controllers;

router.route('/api/v1/meals')
  .get(verifyToken, fetchAllMeals)
  .post(verifyToken, imageUploader, addNewMeal);

router.route('/api/v1/meals/:id')
  .put(verifyToken, imageUploader, updateMeal)
  .delete(verifyToken, deleteMeal);


export default router;
