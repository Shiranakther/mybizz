import express from 'express';
const router = express.Router();

import {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
} from '../controller/CategorieController.js';

router.route('/').get(getAllCategories);
router.route('/:id').get(getCategoryById);
router.route('/').post(createCategory);
router.route('/:id').put(updateCategory);
router.route('/:id').delete(deleteCategory);

export default router;
