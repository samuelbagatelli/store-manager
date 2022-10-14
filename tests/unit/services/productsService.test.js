const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/connection');

const { insert } = require('../../../src/models');

describe('Unit tests for the service products route', function () {
  afterEach(sinon.restore);

  it('Verifying if the name is valid to insert into the db', async function () {
    const body = {
      id: 4,
      name: "Testing name",
    };

    sinon.stub(connection, 'execute').resolves(body);

    const result = await insert(body);

    expect(result).to.deep.equal(body);
  })
})
