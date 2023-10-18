import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('GET /orders', function () { 
    afterEach(function () { sinon.restore(); });
    afterEach(function () { sinon.restore(); });
    it('should return status 200 and an array of orders', async function () {
    const response = await chai.request(app)
    .get('/orders')

    expect(response.status).to.be.equal(200);
    })

});
