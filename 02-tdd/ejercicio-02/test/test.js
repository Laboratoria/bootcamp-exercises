var assert = require('assert');
var Busqueda = require('../ejercicio-02');

// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
describe('busquedaLinear', function() {
    it('should return false if the item is not found in the array', function() {
        assert.equal(Busqueda.busquedaLinear([1,2,3], 4), false);
    });

    it('should return the index of the item if it is found', function() {
        assert.equal(Busqueda.busquedaLinear([1,2,3], 2), 1);
    });

    it('should raise an error if the array param is missing', function() {
        assert.equal(Busqueda.busquedaLinear(undefined, 3), 'Error');
    });

    it('should raise an error if no item to search param is missing', function() {
        assert.equal(Busqueda.busquedaLinear([1,2,3], undefined), 'Error');
    });

    it('should return ONLY the first match if more than one searched values are in the array', function() {
        assert.equal(Busqueda.busquedaLinear([1,2,2,3], 2), 1);
    })

    it('should not accept any wrong param type', function() {
        assert.equal(Busqueda.busquedaLinear("string", false), 'Error de dato');
    });
});
