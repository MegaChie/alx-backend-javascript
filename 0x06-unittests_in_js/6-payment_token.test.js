const token = require('./6-payment_token')
const { expect } = require('chai');

describe('token', () => {
  it('Resolve with success message', (done) =>{
    token(true).then((response) => {
      expect(response).to.deep.equal({ data: 'Successful response from the API' });
      done();
    }).catch((error) => done(error));
  });

  it('should return undefined', (done) => {
    const response = token(false);
    expect(response).to.be.undefined;
    done();
  });
});
