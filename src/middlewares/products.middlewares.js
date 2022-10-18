const { productsModel } = require('../models');

const validateNameExists = (req, res, next) => {
  if (!req.body.name) return res.status(400).json({ message: '"name" is required' });

  next();
};

const validateNameLength = (req, res, next) => {
  const { name } = req.body;
  if (name.length < 5) {
    return (res.status(422)
      .json({ message: '"name" length must be at least 5 characters long' }));
  }

  next();
};

const searchProduct = async (req, res, next) => {
  const { id } = req.params;
  const [[result]] = await productsModel.findById(id);
  if (!result) return res.status(404).json({ message: 'Product not found' });

  next();
};

module.exports = {
  validateNameExists,
  validateNameLength,
  searchProduct,
};