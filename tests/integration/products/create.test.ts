import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('POST /products', function () {
    afterEach(function () { sinon.restore(); });
    it('should return status 201 and a product object', async function () {
    const body = {
        name: 'product',
        price: 100,
        orderId: 1,
    };
    const response = await chai.request(app)
    .post('/products')
    .send(body)

    expect(response.status).to.be.equal(201);
    });
});
