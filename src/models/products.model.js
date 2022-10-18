const conn = require('../connection');

const findAll = () => conn.execute('SELECT * FROM products');

const findById = (id) => conn.execute('SELECT * FROM products WHERE id = ?', [id]);

const insertProduct = (name) => conn
  .execute('INSERT INTO products (name) VALUES (?)', [name]);

const updateProduct = (name, id) => {
  const sqlQuery = `
    UPDATE products
    SET name = ?
    WHERE id = ?;
  `;
  return conn.execute(sqlQuery, [name, id]);
};

const deleteProduct = (id) => conn.execute('DELETE FROM products WHERE products.id = ?', [id]);

module.exports = {
  findAll,
  findById,
  insertProduct,
  updateProduct,
  deleteProduct,
};