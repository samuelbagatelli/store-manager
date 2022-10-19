const products = [
  { id: 1, name: 'Martelo de Thor' },
  { id: 2, name: 'Traje de encolhimento' },
  { id: 3, name: 'Escudo do Capitão América' }
];

const newProduct = {
  name: 'Novo Produto',
};

const resolvesNewProduct = {
  id: 4,
  name: 'Novo Produto',
};

const updatedProduct = {
  id: 1, name: 'Novo Nome do Produto'
};

const deletedProduct = { status: 204 };

module.exports = {
  products,
  newProduct,
  resolvesNewProduct,
  updatedProduct,
  deletedProduct,
};