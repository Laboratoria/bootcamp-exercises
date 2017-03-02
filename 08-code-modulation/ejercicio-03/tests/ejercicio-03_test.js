var assert = require('assert');
var Calcular = require('../ejercicio-03.js')

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
describe('factorial', function(){
    it('should calculate the correct factorial for N', function(){
      assert.equal(Calcular.factorial(5),120)
      assert.equal(Calcular.factorial(7),5040)
      assert.equal(Calcular.factorial(10),3628800)
    })

    it('should should handle edge cases', function(){
      assert.equal(Calcular.factorial(0),1)
      assert.equal(Calcular.factorial(1),1)
    })


    it('should raise error for wrong params', function(){
      assert.equal(Calcular.factorial("string"),"Error")
    })

})
