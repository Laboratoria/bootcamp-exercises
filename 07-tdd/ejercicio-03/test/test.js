var assert = require('assert');
var Calculadora = require('../ejercicio-03');

//NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
describe('resta', function() {
    it('should return the remainder of two numbers', function() {
        assert.equal(Calculadora.resta(3, 2), 1);
    });

    it('should raise an error if one param is missing', function() {
        assert.equal(Calculadora.resta(2), 'Error');
    });
});