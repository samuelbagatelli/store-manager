const conn = require('../connection');

const findAll = () => conn.execute('SELECT * FROM products');

const findById = (id) => conn.execute('SELECT * FROM products WHERE id = ?', [id]);

const insertProducts = ({ name }) => conn
  .execute('INSERT INTO products (name) VALUES (?, ?)', [name]);

module.exports = {
  findAll,
  findById,
  insertProducts,
};