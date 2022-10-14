const conn = require('../connection');

const findAll = () => conn.execute('SELECT * FROM products');

const findById = (id) => conn.execute('SELECT * FROM products WHERE id = ?', [id]);

const insert = ({ id, name }) => conn
  .execute('INSERT INTO products (id, name) VALUES (?, ?)', [id, name]);

module.exports = {
  findAll,
  findById,
  insert,
};