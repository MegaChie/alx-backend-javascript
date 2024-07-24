const { expect } = require('chai');
const calc = require('./2-calcul_chai');

describe('numberAddition', () => {
  it('round number and add (1, 3)', () => {
    const res = calc('SUM', 1, 3);
    expect(res).to.equal(4);
  });

  it('round number and sub (1, 3.7)', () => {
    const res = calc('SUBTRACT', 1, 3.7);
    expect(res).to.equal(-3);
  });

  it('round number and add (1.2, 3.7)', () => {
    const res = calc('SUM', 1.2, 3.7);
    expect(res).to.equal(5);
  });

  it('round number and sub (1.5, 3.8)', () => {
    const res = calc('SUBTRACT', 1.5, 3.8);
    expect(res).to.equal(-2);
  });

  it('round number and div (1.0, 0)', () => {
    const res = calc('DIVIDE', 1.0, 0);
    expect(res).to.equal('Error');
  });

  it('round number and div (0, 0)', () => {
    const res = calc('DIVIDE', 0, 0);
    expect(res).to.equal('Error');
  });

  it('round number and div (10, 10.6)', () => {
    const res = calc('DIVIDE', 10, 10.6);
    expect(res).to.be.closeTo(0.90909090909, 1e-10);
  });

  it('round number and div (100, 100.6)', () => {
    const res = calc('DIVIDE', 100, 100.6);
    expect(res).to.be.closeTo(0.9900990099, 1e-10);
  });
});
