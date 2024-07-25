const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('sum of two positive int', () => {
    assert.strictEqual(calculateNumber(2, 5), 7);
  });
  it('sum of float un integer', () => {
    assert.strictEqual(calculateNumber(2, 4.6), 7);
  });
  it('sum of two positive float with round half up', () => {
    assert.strictEqual(calculateNumber(2.5, 4.6), 8);
  });
  it('sum of two positive float with round half down', () => {
    assert.strictEqual(calculateNumber(2.3, 4.4), 6);
  });
  it('sum of two positive float with round half down and other up', () => {
    assert.strictEqual(calculateNumber(2.3, 4.7), 7);
  });
  it('sum of integer, positive and negative', () => {
    assert.strictEqual(calculateNumber(2, -4), -2);
  });
  it('sum of two negative int', () => {
    assert.strictEqual(calculateNumber(-2, -4), -6);
  });
  it('sum of two negative float with round half up', () => {
    assert.strictEqual(calculateNumber(-2.5, -4.6), -7);
  });
  it('sum of two negative float with round half down', () => {
    assert.strictEqual(calculateNumber(-2.3, -4.4), -6);
  });
  it('sum of two negative float with round half down and other up', () => {
    assert.strictEqual(calculateNumber(-2.3, -4.7), -7);
  });
  it('first parameters is a string', () => {
    assert.strictEqual(calculateNumber('2', 4), 6);
  });
  it('second parameters is a string', () => {
    assert.strictEqual(calculateNumber(2, '4'), 6);
  });
  it('both parameters are strings', () => {
    assert.strictEqual(calculateNumber('2', '4'), 6);
  });
  it('both parameters are strings, one of them in float format', () => {
    assert.strictEqual(calculateNumber('2', '4.6'), 7);
  });
  it('both parameters are strings in float format', () => {
    assert.strictEqual(calculateNumber('2.5', '4.6'), 8);
  });
    it('one of parameters is missing', () => {
    assert.strictEqual(calculateNumber(2), NaN);
  });
  it('both parameters is missing', () => {
    assert.strictEqual(calculateNumber(), NaN);
  });
  it('one of parameters is NaN', () => {
    assert.strictEqual(calculateNumber(NaN, 4), NaN);
  });
  it('both parameters is NaN', () => {
    assert.strictEqual(calculateNumber(NaN, NaN), NaN);
  });
  it('one of parameters is Infinity', () => {
    assert.strictEqual(calculateNumber(Infinity, 4), Infinity);
  });
  it('both parameters is Infinity', () => {
    assert.strictEqual(calculateNumber(Infinity, Infinity), Infinity);
  });
});
