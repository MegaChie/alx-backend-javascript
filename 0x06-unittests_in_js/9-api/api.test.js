const request = require('request');
const { expect } = require('chai');
const sinon = require('sinon');

describe('GET /', () => {
  it('respond with a message', (done) => {
    request.get('http://localhost:7865/', (error, response, body) => {
      if (error) return done(error);
      expect(response.statusCode).to.be.equal(200);
      expect(response.headers['content-type']).to.include('text/html');
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('With payment methods for valid cart id', (done) => {
    request.get('http://localhost:7865/cart/32', (error, response, body) => {
      if (error) return done(error);
      expect(response.statusCode).to.be.equal(200);
      expect(response.headers['content-type']).to.include('text/html');
      expect(body).to.equal('Payment methods for cart 32');
      done();
    });
  });

  it('With payment methods for invalid cart id', (done) => {
    request.get('http://localhost:7865/cart/number', (error, response, body) => {
      if (error) return done(error);
      expect(response.statusCode).to.be.equal(404);
      done();
    });
  });
});
