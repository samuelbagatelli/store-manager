const express = require('express');
// const camelize = require('camelize');

const { validateNameExists, validateNameLength, searchProduct } = require('../middlewares');

const { productsController } = require('../controllers');

const router = express.Router();

router.get('/', productsController.findAll);

router.get('/:id', searchProduct, productsController.findById);

router.post('/', validateNameExists, validateNameLength, productsController.insertProduct);

router.put(
  '/:id',
  validateNameExists,
  validateNameLength,
  searchProduct,
  productsController.updateProduct,
);

router.delete('/:id', searchProduct, productsController.deleteProduct);

module.exports = router;