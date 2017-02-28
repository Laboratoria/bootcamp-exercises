var assert = require('assert');
var Ordenador = require('../ejercicio-01.js')

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
describe('ordenarArreglo', function(){
    it('should return an array sorted', function(){
      assert.equal(Ordenador.ordenarArreglo([4,3,2,1]),[1,2,3,4])
    })

    it('should return an error when no array is provided', function(){
      assert.equal(Ordenador.ordenarArreglo(false),"Error")
      assert.equal(Ordenador.ordenarArreglo(3),"Error")
      assert.equal(Ordenador.ordenarArreglo(NaN),"Error")
      assert.equal(Ordenador.ordenarArreglo(),"Error")
    })

    it('should support negative numbers', function(){
      assert.equal(Ordenador.ordenarArreglo([4,3,-4,0]),[-4,0,3,4])
    })

    it('should return one item if only one item is provided', function(){
      assert.equal(Ordenador.ordenarArreglo([4]),[4])
    })

})
