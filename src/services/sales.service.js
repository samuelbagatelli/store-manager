const { salesModel } = require('../models');

const insertSalesProducts = async (body) => {
  const [array] = await salesModel.findSalesId();
  const id = array.length + 1;
  await salesModel.insertSales();
  salesModel.insertSalesProducts(id, body);
  const result = {
    id,
    itemsSold: body,
  };
  return { status: 201, result };
};

const findAllSales = async () => {
  const [result] = await salesModel.findAllSales();
  return { status: 200, result };
};

const findSalesById = async (id) => {
  const [result] = await salesModel.findSalesById(id);
  return { status: 200, result };
};

module.exports = {
  insertSalesProducts,
  findAllSales,
  findSalesById,
};