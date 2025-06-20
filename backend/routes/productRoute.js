import express from 'express';
const router = express.Router();

import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} from '../controller/productController.js';

router.route('/').get(getAllProducts);
router.route('/:id').get(getProductById);
router.route('/').post(createProduct);
router.route('/:id').put(updateProduct);
router.route('/:id').delete(deleteProduct);

export default router;
