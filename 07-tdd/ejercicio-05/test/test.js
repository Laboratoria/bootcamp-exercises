var assert = require('assert');
var OddNumbers = require('../ejercicio-05');

// Pruebas unitarias
describe('addOdd', function() {
  it('should return the correct add of the first n odd numbers', function() {
    assert.equal(OddNumbers.addOdd(7), 49);
  });
  it('should return the correct add of the first n odd numbers even if n is string', function() {
    assert.equal(OddNumbers.addOdd("6"), 36);
    assert.notEqual(OddNumbers.addOdd("8"), NaN);
  });
  it('should return an Error if the param is missing', function() {
    assert.equal(OddNumbers.addOdd(), "Error");
  });
  it('should return Error it the param is less than 1', function() {
    assert.equal(OddNumbers.addOdd(), "Error");
  });
});