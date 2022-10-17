const conn = require('../connection');

const findAll = () => conn.execute('SELECT * FROM products');

const findById = (id) => conn.execute('SELECT * FROM products WHERE id = ?', [id]);

const insertProducts = ({ name }) => conn
  .execute('INSERT INTO products (name) VALUES (?, ?)', [name]);

const updateProducts = async (name, id) => {
  await conn.execute(`UPDATE products
    SET name = ?
    WHERE id = ?;`,
    [name, id]);

  return conn.execute('SELECT * FROM products WHERE id = ?', [id]);
};

module.exports = {
  findAll,
  findById,
  insertProducts,
  updateProducts,
};