const express = require('express');
const conn = require('../connection');
const salesMiddlewares = require('../middlewares/sales.middlewares');

const { validateProductIdDb, ...salesMiddlewares } = salesMiddlewares;

const middlewares = Object.values(salesMiddlewares);

const { insertSales, insertSalesProducts } = require('../models');

const router = express.Router();

router.post('/', ...middlewares, async ({ body }, res) => {
  const [result] = await conn.execute('SELECT id FROM sales');
  const newId = result.length + 1;

  await insertSales();
  insertSalesProducts(newId, body);

  const response = {
    id: newId,
    itemsSold: body,
  };

  res.status(201).json(response);
});

module.exports = router;