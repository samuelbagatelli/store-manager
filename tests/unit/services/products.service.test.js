const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const connection = require('../../../src/connection');
const { productsService } = require('../../../src/services');

const { productsMocks } = require('../mocks');

describe('Unit tests for the service products route', function () {
  afterEach(sinon.restore);

  it('Returns all products', async function () {
    const { products } = productsMocks;

    sinon.stub(connection, 'execute').resolves(products);

    await productsService.findAll();
  });

  it('Returns a specific product', async function () {
    const { products } = productsMocks;

    sinon.stub(connection, 'execute').resolves(products[0]);

    productsService.findById(1);
  });

  it('Inserts a product in the database', async function () {
    const { newProduct, resolvesNewProduct } = productsMocks;

    sinon.stub(connection, 'execute').resolves(resolvesNewProduct);

    productsService.insertProduct(newProduct);
  });

  it('Updates a product in the database', async function () {
    const { updatedProduct } = productsMocks;

    sinon.stub(connection, 'execute').resolves(updatedProduct);

    productsService.updateProduct('Novo Nome do Produto', 1);
  });

  it('Deletes a product in the database', async function () {
    const { deletedProduct } = productsMocks;

    sinon.stub(connection, 'execute').resolves(deletedProduct);

    await productsService.deleteProduct(1);
  });
});