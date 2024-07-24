const assert = require('assert');
const calc = require('./1-calcul');

describe('numberAddition', () => {
  it('round number and add (1, 3)', () => {
    const res = calc('SUM', 1, 3);
    assert.strictEqual(res, 4);
  });

  it('round number and sub (1, 3.7)', () => {
    const res = calc('SUBTRACT', 1, 3.7);
    assert.strictEqual(res, -3);
  });

  it('round number and add (1.2, 3.7)', () => {
    const res = calc('SUM', 1.2, 3.7);
    assert.strictEqual(res, 5);
  });

  it('round number and sub (1.5, 3.8)', () => {
    const res = calc('SUBTRACT', 1.5, 3.8);
    assert.strictEqual(res, -2);
  });

  it('round number and div (1.0, 0)', () => {
    const res = calc('DIVIDE', 1.0, 0);
    assert.strictEqual(res, 'Error');
  });

  it('round number and div (0, 0)', () => {
    const res = calc('DIVIDE', 0, 0);
    assert.strictEqual(res, 'Error');
  });

  it('round number and div (10, 10.6)', () => {
    const res = calc('DIVIDE', 10, 10.6);
    assert.strictEqual(res.toFixed(10), (0.9090909091).toFixed(10));
  });

  it('round number and div (100, 100.6)', () => {
    const res = calc('DIVIDE', 100, 100.6);
    assert.strictEqual(res.toFixed(10), (0.9900990099).toFixed(10));
  });
});
