const assert = require('assert');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require("./5-payment");

describe('sendPaymentRequestToApi', () => {
  let consLogSpy;

  beforeEach(() => {
    consLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consLogSpy.restore();
  });
  
  it('Call sendPaymentRequestToAPI with 100, and 20', () => {
    sendPaymentRequestToApi(100, 20);
    assert(consLogSpy.calledOnceWithExactly('The total is: 120'));
  });

  it('Call sendPaymentRequestToAPI with 10, and 10', () => {
    sendPaymentRequestToApi(10, 10);
    assert(consLogSpy.calledOnceWithExactly('The total is: 20'));
  });
});
