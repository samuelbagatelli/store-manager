const express = require('express');
const { salesMiddlewares } = require('../middlewares');

const {
  validateProductExists,
  validateProductIdDb,
  validateProductIdExists,
  validateQuantityExists,
  validateQuantityValue,
} = salesMiddlewares;

const { salesController } = require('../controllers');

const router = express.Router();

router.post(
  '/',
  validateProductIdExists,
  validateQuantityValue,
  validateQuantityExists,
  validateProductIdDb,
  salesController.insertSalesProducts,
);

router.get('/', salesController.findAllSales);

router.get('/:id', validateProductExists, salesController.findSalesById);

module.exports = router;