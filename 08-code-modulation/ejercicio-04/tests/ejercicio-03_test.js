var assert = require('assert');
var Calcular = require('../ejercicio-03.js')

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
describe('factorial', function(){
    it('should calculate the correct factorial for N', function(){
      assert.equal(Calcular.collatz(2),1)
      assert.equal(Calcular.collatz(3),7)
      assert.equal(Calcular.collatz(7),16)
    })

    it('should should handle edge cases', function(){
      assert.equal(Calcular.collatz(1),0)
    })


    it('should raise error for wrong params', function(){
      assert.equal(Calcular.collatz("string"),"Error")
    })

})
