const conn = require('../connection');

const findAll = () => conn.execute('SELECT * FROM products');

const findById = (id) => conn.execute('SELECT * FROM products WHERE id = ?', [id]);

module.exports = {
  findAll,
  findById,
};