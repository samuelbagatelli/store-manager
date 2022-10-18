const { productsService } = require('../services');

const findAll = async (_req, res) => {
  const { status, result } = await productsService.findAll();
  res.status(status).json(result);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { status, result } = await productsService.findById(id);
  res.status(status).json(result);
};

const insertProduct = async (req, res) => {
  const { name } = req.body;
  const { status, result } = await productsService.insertProduct(name);
  res.status(status).json(result);
};

const updateProduct = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const { status, result } = await productsService.updateProduct(name, id);
  res.status(status).json(result);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const { status, result } = await productsService.deleteProduct(id);
  res.status(status).json(result);
};

module.exports = {
  findAll,
  findById,
  insertProduct,
  updateProduct,
  deleteProduct,
};