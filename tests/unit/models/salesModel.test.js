const { expect } = require('chai');
const sinon = require('sinon');

const salesModel = require('../../../src/models/sales.model');
const { insertSalesProducts } = require('../../../src/models');
const connection = require('../../../src/connection');

describe('Unit tests for the service sales route', function () {
  afterEach(sinon.restore);

  // it('Validates the requisition', async function () {
  //   const body = [
  //     {
  //       productId: 1,
  //       quantity: 1
  //     },
  //     {
  //       productId: 2,
  //       quantity: 5
  //     }
  //   ];

  //   const id = 3;

  //   const check = {
  //     id,
  //     body,
  //   };

  //   sinon.stub(connection, 'execute').resolves([{ insertId: id }]);

  //   const result = insertSalesProducts(id, body);

  //   expect(result.id).to.deep.equal(id);
  // });
});