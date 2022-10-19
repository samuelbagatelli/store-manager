const { expect } = require('chai');
const sinon = require('sinon');

const { salesModel } = require('../../../src/models');
const connection = require('../../../src/connection');

const { salesMocks } = require('./mocks');

describe('Unit tests for the service sales route', function () {
  afterEach(sinon.restore);

  it('Inserts the new sale into the sales_products table', function () {
    const { saleCreateResponse, newSale } = salesMocks;

    sinon.stub(salesModel, 'insertSalesProducts').returns(saleCreateResponse);

    const result = salesModel.insertSalesProducts(3, newSale);

    expect(result).to.deep.equal(saleCreateResponse);
  });

  it('Inserts the date into the sales table', async function () {
    const { expectedDate } = salesMocks;

    sinon.stub(connection, 'execute').resolves(expectedDate);

    const result = await salesModel.insertSales();

    expect(result).to.deep.equal(expectedDate);
  });

  it('Returns the ids from the sales table', async function () {
    const { expectedIdResult } = salesMocks;

    sinon.stub(connection, 'execute').resolves(expectedIdResult);

    const result = await salesModel.findSalesId();

    expect(result).to.deep.equal(expectedIdResult);
  });

  it('Returns all sales', async function () {
    const { expectedAllSales } = salesMocks;

    sinon.stub(connection, 'execute').resolves(expectedAllSales);

    const result = await salesModel.findAllSales();

    expect(result).to.deep.equal(expectedAllSales);
  });
});