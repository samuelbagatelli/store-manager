const { productsModel } = require('../models');

const validateProductIdExists = ({ body }, res, next) => {
  const { productId } = body[0];

  if (!productId) return res.status(400).json({ message: '"productId" is required' });

  next();
};

const validateQuantityValue = ({ body }, res, next) => {
  const checkBody = body.find((element) => element.quantity <= 0);

  if (checkBody) {
    return (
      res.status(422)
        .json({ message: '"quantity" must be greater than or equal to 1' })
    );
  }

  next();
};

const validateQuantityExists = ({ body }, res, next) => {
  const { quantity } = body[0];

  if (!quantity) return res.status(400).json({ message: '"quantity" is required' });

  next();
};

const validateProductIdDb = async ({ body }, res, next) => {
  const errorsArray = body.map(async (elem) => {
    const [[result]] = await productsModel.findById(elem.productId);

    if (!result) return 'error';
    return 'OK';
  });

  const errors = await Promise.all(errorsArray);

  const check = errors.some((element) => element === 'error');

  if (check) return res.status(404).json({ message: 'Product not found' });

  next();
};

const validateProductExists = async (req, res, next) => {
  const { id } = req.params;
  const [[result]] = await productsModel.findById(id);

  if (!result) return res.status(404).json({ message: 'Sale not found' });

  next();
};

module.exports = {
  validateQuantityValue,
  validateProductIdExists,
  validateQuantityExists,
  validateProductIdDb,
  validateProductExists,
};