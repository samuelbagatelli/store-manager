const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/connection');
const { findAll, findById, insertProducts } = require('../../../src/models/index');

const { products, newProduct, resolvesNewProduct } = require('./mocks');

describe('Unit tests for the model products route', function () {
  it('Returns all products when no id is informed', async function () {
    sinon.stub(connection, 'execute').resolves(products);

    const result = await findAll();

    expect(result).to.deep.equal(products);
  });

  it('Returns the exact product when the id is informed', async function () {
    sinon.stub(connection, 'execute').resolves(products[0]);

    const result = await findById(1);

    expect(result).to.deep.equal(products[0]);
  });

  it('Inserts the product into the table and returns it', async function () {
    sinon.stub(connection, 'execute').resolves(resolvesNewProduct);

    const result = await insertProducts(newProduct);

    expect(result).to.deep.equal(resolvesNewProduct);
  });

  afterEach(sinon.restore);
});