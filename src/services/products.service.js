const { productsModel } = require('../models');

const findAll = async () => {
  const [result] = await productsModel.findAll();
  return { status: 200, result };
};

const findById = async (id) => {
  const [[result]] = await productsModel.findById(id);
  return { status: 200, result };
};

const insertProduct = async (name) => {
  const [{ insertId }] = await productsModel.insertProduct(name);
  const { result } = await findById(insertId);
  return { status: 201, result };
};

const updateProduct = async (name, id) => {
  await productsModel.updateProduct(name, id);
  const { result } = await findById(id);
  return { status: 200, result };
};

const deleteProduct = async (id) => {
  await productsModel.deleteProduct(id);
  return { status: 204 };
};

module.exports = {
  findAll,
  findById,
  insertProduct,
  updateProduct,
  deleteProduct,
};