const camelize = require('camelize');

const { salseService } = require('../services');

const insertSalesProducts = async ({ body }, res) => {
  const { status, result } = await salseService.insertSalesProducts(body);
  res.status(status).json(result);
};

const findAllSales = async (_req, res) => {
  const { status, result } = await salseService.findAllSales();
  res.status(status).json(camelize(result));
};

const findSalesById = async (req, res) => {
  const { id } = req.params;
  const { status, result } = await salseService.findSalesById(id);
  res.status(status).json(camelize(result));
};

module.exports = {
  insertSalesProducts,
  findAllSales,
  findSalesById,
};