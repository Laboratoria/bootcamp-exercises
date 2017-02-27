var assert = require('assert');
var Mate = require('../ejercicio-04.js')

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
describe('fibonacci', function(){

  it("should return the correct fibonnaci secuences",function(){
    assert.deepEqual(Mate.fibonacci(3),[0,1,1])
  })

  it("should raise an error when an invalid upper limit is set",function(){
    assert.equal(Mate.fibonacci("string"),"Error")
    assert.equal(Mate.fibonacci(false),"Error")
  })

  it("should raise an error when a negative  or cero upper limit is provided",function(){
    assert.equal(Mate.fibonacci(-1),"Error")
  })


})
