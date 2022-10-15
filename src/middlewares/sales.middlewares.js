const { findAll } = require('../models');

const validateProductIdExists = ({ body }, res, next) => {
  const { productId } = body[0];

  if (!productId) return res.status(400).json({ message: '"productId" is required' });

  next();
};

const validateQuantityValue = ({ body }, res, next) => {
  const checkBody = body.find((element) => element.quantity <= 0);

  if (checkBody) return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });

  next();
};

const validateQuantityExists = ({ body }, res, next) => {
  const { quantity } = body[0];

  if (!quantity) return res.status(400).json({ message: '"quantity" is required' });

  next();
};

const validateProductIdDb = async ({ body }, res, next) => {
  const productsIds = body.map((element) => element.productId);

  const [result] = await findAll();
  const dataBaseIds = result.map((element) => element.id);

  const checkIds = productsIds.every((element) => dataBaseIds.includes(element));

  if (!checkIds) return res.status(404).json({ message: 'Product not found' });

  next();
};

module.exports = {
  validateQuantityValue,
  validateProductIdExists,
  validateQuantityExists,
  validateProductIdDb,
};