const express = require('express');
const camelize = require('camelize');

const { validateNameExists, validateNameLength, searchProduct } = require('../middlewares');
const { findAll, findById, insertProducts, updateProducts } = require('../models');

const router = express.Router();

router.get('/', async (_req, res) => {
  const [result] = await findAll();

  res.status(200).json(result);
});

router.get('/:id', async (req, res) => {
  const [result] = await findById(req.params.id);

  if (!result.length) res.status(404).json({ message: 'Product not found' });

  res.status(200).json(...result);
});

router.post('/', validateNameExists, validateNameLength, async (req, res) => {
  const body = {
    name: req.body.name,
  };

  await insertProducts(body);

  res.status(201).json(body);
});

router.put('/:id', validateNameExists, validateNameLength, searchProduct, async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  const [result] = await updateProducts(name, id);

  res.status(200).json(camelize(...result));
});

module.exports = router;