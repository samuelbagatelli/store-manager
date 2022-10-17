const conn = require('../connection');

const insertSales = () => conn.execute('INSERT INTO sales (date) VALUES (NOW())');

const insertSalesProducts = (lastId, productsArray) => {
  productsArray.forEach(async ({ productId, quantity }) => {
    await conn.execute(`INSERT INTO sales_products (sale_id, product_id, quantity)
      VALUES (?, ?, ?)`, [lastId, productId, quantity]);
  });

  return;
};

module.exports = {
  insertSales,
  insertSalesProducts,
};