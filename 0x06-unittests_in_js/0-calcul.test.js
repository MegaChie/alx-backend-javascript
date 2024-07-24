const { expect } = require('chai');
const sumNumber = require('./0-calcul');

describe('numberAddition', () => {
  it('should round numbers and add (1, 3)', () => {
    const res = sumNumber(1, 3);
    expect(res).to.equal(4);
  });
  
  it('should round numbers and add (1, 3.7)', () => {
    const res = sumNumber(1, 3.7);
    expect(res).to.equal(5);
  });

  it('should round numbers and add (1.2, 3.7)', () => {
    const res = sumNumber(1.2, 3.7);
    expect(res).to.equal(5);
  });

  it('should round numbers and add (1.5, 3.8)', () => {
    const res = sumNumber(1.5, 3.8);
    expect(res).to.equal(6);
  });
});
