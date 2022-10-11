const express = require('express');

const { findAll, findById } = require('../models');

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

module.exports = router;