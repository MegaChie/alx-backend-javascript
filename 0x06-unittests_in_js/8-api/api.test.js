const request = require('request');
const { expect } = require('chai');
const sinon = require('sinon');

describe('GET /', () => {
  it('respond with a message', (done) => {
    request.get('http://localhost:7865/', (error, response, body) => {
      if (error) return done(error);
      expect(response.statusCode).to.be.equal(200);
      expect(response.headers['content-type']).to.include('text/html');  // Corrected the content type check
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
