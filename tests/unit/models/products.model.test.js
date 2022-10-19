const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const connection = require('../../../src/connection');
const { productsModel } = require('../../../src/models');

const { productsMocks } = require('../mocks');

describe('Unit tests for the model products route', function () {
  it('Returns all products when no id is informed', async function () {
    const { products } = productsMocks;

    sinon.stub(connection, 'execute').resolves(products);

    await productsModel.findAll();
  });

  it('Returns the exact product when the id is informed', async function () {
    const { products } = productsMocks;

    sinon.stub(connection, 'execute').resolves(products[0]);

    await productsModel.findById(1);
  });

  it('Inserts the product into the table and returns it', async function () {
    const { newProduct, resolvesNewProduct } = productsMocks;

    sinon.stub(connection, 'execute').resolves(resolvesNewProduct);

    await productsModel.insertProduct(newProduct);
  });

  it('Updates a product from the table products when the id is informed', async function () {
    const { updatedProduct } = productsMocks;

    sinon.stub(connection, 'execute').resolves(updatedProduct);

    await productsModel.updateProduct(1);
  });

  it('Deletes a product from the table products when the id is informed', async function () {
    const { deletedProduct } = productsMocks;

    sinon.stub(connection, 'execute').resolves(deletedProduct);

    await productsModel.deleteProduct(1);
  });

  afterEach(sinon.restore);
});