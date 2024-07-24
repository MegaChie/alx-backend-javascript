const assert = require('assert');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require("./4-payment");

describe('sendPaymentRequestToApi', () => {
  it('Call function with correct args to see log', () => {
    const calcNumbStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consLogSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);

    assert(calcNumbStub.calledOnceWithExactly('SUM', 100, 20));
    assert(consLogSpy.calledOnceWithExactly('The total is: 10'));

    calcNumbStub.restore();
    consLogSpy.restore();
  });
});
