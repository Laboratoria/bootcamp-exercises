var assert = require('assert');
var OddTwoNumbers = require('../ejercicio-06');

// Pruebas unitarias
describe('addTwoOdd', function() {
  it('should return the correct add of the first n and m odd numbers', function() {
    assert.equal(OddTwoNumbers.addTwoOdd(5, 4), 41);
  });
  it('should return the correct add of the first n and m odd numbers even if n or m is string', function() {
    assert.equal(OddTwoNumbers.addTwoOdd("6", 4), 52);
    assert.equal(OddTwoNumbers.addTwoOdd(6, "4"), 52);
    assert.equal(OddTwoNumbers.addTwoOdd("6", "4"), 52);
    assert.notEqual(OddTwoNumbers.addTwoOdd("8", "4"), NaN);
  });
  it('should return an Error if one of the param is missing', function() {
    assert.equal(OddTwoNumbers.addTwoOdd(1), "Error");
    assert.equal(OddTwoNumbers.addTwoOdd(), "Error");
  });
  it('should return Error it one of the params is less than 1', function() {
    assert.equal(OddNumbers.addTwoOdd(-1, 9), "Error");
    assert.equal(OddNumbers.addTwoOdd(9, 0), "Error");
  });
});
