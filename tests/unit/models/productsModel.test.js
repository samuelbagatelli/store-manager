const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/connection');
const { productsModel } = require('../../../src/models');

const { productsMocks } = require('./mocks');

describe('Unit tests for the model products route', function () {
  it('Returns all products when no id is informed', async function () {
    const { products } = productsMocks;

    sinon.stub(connection, 'execute').resolves(products);

    const result = await productsModel.findAll();

    expect(result).to.deep.equal(products);
  });

  it('Returns the exact product when the id is informed', async function () {
    const { products } = productsMocks;

    sinon.stub(connection, 'execute').resolves(products[0]);

    const result = await productsModel.findById(1);

    expect(result).to.deep.equal(products[0]);
  });

  it('Inserts the product into the table and returns it', async function () {
    const { newProduct, resolvesNewProduct } = productsMocks;

    sinon.stub(connection, 'execute').resolves(resolvesNewProduct);

    const result = await productsModel.insertProduct(newProduct);

    expect(result).to.deep.equal(resolvesNewProduct);
  });

  it('Updates a product from the table products when the id is informed', async function () {
    const { updatedProduct } = productsMocks;

    sinon.stub(connection, 'execute').resolves(updatedProduct);

    const result = await productsModel.updateProduct(1);

    expect(result).to.deep.equal(updatedProduct);
  });

  it('Deletes a product from the table products when the id is informed', async function () {
    const { deletedProduct } = productsMocks;

    sinon.stub(connection, 'execute').resolves(deletedProduct);

    const result = await productsModel.deleteProduct(1);

    expect(result.status).to.equal(204);
  });

  afterEach(sinon.restore);
});