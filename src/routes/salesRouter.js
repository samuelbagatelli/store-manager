const express = require('express');
const camelize = require('camelize');
const conn = require('../connection');
const salesMiddlewares = require('../middlewares/sales.middlewares');

const middlewares = Object.values(salesMiddlewares);

const { insertSales, insertSalesProducts, findAllSales, findSalesById } = require('../models');

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

router.get('/', async (_req, res) => {
  const [result] = await findAllSales();

  res.status(200).json(camelize(result));
});

router.get('/:id', async (req, res) => {
  const [result] = await findSalesById(req.params.id);

  if (result.length === 0) return res.status(404).json({ message: 'Sale not found' });

  res.status(200).json(camelize(result));
});

module.exports = router;