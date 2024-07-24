const assert = require('assert');
const sumNumber = require('./0-calcul');

describe('numberAddition', () => {
  it('round number and add (1, 3)', () => {
    const res = sumNumber(1, 3);
    assert.strictEqual(res, 4);
  });

  it('round number and add (1, 3.7)', () => {
    const res = sumNumber(1, 3.7);
    assert.strictEqual(res, 5);
  });

  it('round number and add (1.2, 3.7)', () => {
    const res = sumNumber(1.2, 3.7);
    assert.strictEqual(res, 5);
  });

  it('round number and add (1.5, 3.8)', () => {
    const res = sumNumber(1.5, 3.8);
    assert.strictEqual(res, 6);
  });
});
