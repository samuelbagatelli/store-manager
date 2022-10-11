const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/connection');
const { findAll, findById } = require('../../../src/models/index');

const { products } = require('./mocks');

describe('Unit tests for the products route', function () {
  afterEach(sinon.restore);

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
});