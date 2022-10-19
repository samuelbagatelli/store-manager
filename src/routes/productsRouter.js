const express = require('express');

const { productsMiddlewares } = require('../middlewares');

const {
  searchProduct,
  validateNameExists,
  validateNameLength,
} = productsMiddlewares;

const { productsController } = require('../controllers');

const router = express.Router();

router.get('/', productsController.findAll);

router.get('/:id', searchProduct, productsController.findById);

router.post(
  '/',
  validateNameExists,
  validateNameLength,
  productsController.insertProduct,
);

router.put(
  '/:id',
  validateNameExists,
  validateNameLength,
  searchProduct,
  productsController.updateProduct,
);

router.delete('/:id', searchProduct, productsController.deleteProduct);

module.exports = router;