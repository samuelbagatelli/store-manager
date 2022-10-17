const conn = require('../connection');

const insertSales = () => conn.execute('INSERT INTO sales (date) VALUES (NOW())');

const insertSalesProducts = (lastId, productsArray) => {
  productsArray.forEach(async ({ productId, quantity }) => {
    await conn.execute(`INSERT INTO sales_products (sale_id, product_id, quantity)
      VALUES (?, ?, ?)`, [lastId, productId, quantity]);
  });
};

const findAllSales = () => conn.execute(
  `SELECT sp.sale_id, sp.product_id, sp.quantity, s.date
  FROM sales_products AS sp
  INNER JOIN sales AS s
  ON sp.sale_id = s.id;`,
);

const findSalesById = (id) => conn.execute(
  `SELECT sp.product_id, sp.quantity, s.date
  FROM sales_products AS sp
  INNER JOIN sales AS s
  ON sp.sale_id = s.id
  WHERE sp.sale_id = ?;`,
  [id],
);

module.exports = {
  insertSales,
  insertSalesProducts,
  findAllSales,
  findSalesById,
};