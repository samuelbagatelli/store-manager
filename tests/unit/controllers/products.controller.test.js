const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const connection = require('../../../src/connection');
const { productsService } = require('../../../src/services');
const { productsController } = require('../../../src/controllers');

const { productsMocks } = require('../mocks');

describe('Unit tests for the products controller route', function () {
  afterEach(sinon.restore);

  it('Returns all products from the database', async function () {
    const { products } = productsMocks;

    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsService, 'findAll').resolves({ status: 200, result: products });

    await productsController.findAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(products);
  });

  it('Returns a specific products from the database', async function () {
    const { products } = productsMocks;

    const req = {
      params: { id: 1 },
    };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsService, 'findById').resolves({ status: 200, result: products[0] });

    await productsController.findById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(products[0]);
  });
});