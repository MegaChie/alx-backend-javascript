const request = require('request');
const { expect } = require('chai');
const sinon = require('sinon');

describe('API Tests', function() {
  it('respond with a message', (done) => {
    request.get('http://localhost:7865/', (error, response, body) => {
      if (error) return done(error);
      expect(response.statusCode).to.be.equal(200);
      expect(response.headers['content-type']).to.include('text/plain');
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('With payment methods for valid cart id', (done) => {
    request.get('http://localhost:7865/cart/32', (error, response, body) => {
      if (error) return done(error);
      expect(response.statusCode).to.be.equal(200);
      expect(response.headers['content-type']).to.include('text/plain')
      expect(body).to.equal('Payment methods for cart 32');
      done();
    });
  });

  it('With payment methods for invalid cart id', (done) => {
    request.get('http://localhost:7865/cart/number',
      (error, response, body) => {
      if (error) return done(error);
      expect(response.statusCode).to.be.equal(404);
      done();
    });
  });

  it('POST /login responds with welcome', (done) => {
    const options = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: { userName: 'JohnDoe' }
    };
    request(options, (error, response, body) => {
      if (error) return done(error);
      expect(response.statusCode).to.be.equal(200);
      expect(body).to.equal('Welcome JohnDoe');
      done();
    });
  });

  it('POST /login responds with no name', (done) => {
    const options = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: {}
    };
    request(options, (error, response, body) => {
      if (error) return done(error);
      expect(response.statusCode).to.be.equal(400);
      expect(body).to.equal('Username is required');
      done();
    });
  });

 it('GET /available_payments responds with payment methods', (done) => {
   request.get('http://localhost:7865/available_payments',
     (error, response, body) => {
     if (error) return done(error);
     const jsonResponse = JSON.parse(body);
     expect(response.statusCode).to.be.equal(200);
     expect(response.headers['content-type']).to.include('application/json');
     expect(jsonResponse).to.deep.equal({ payment_methods: { credit_cards: true, paypal: false } });
     done();
     });
 });
});
