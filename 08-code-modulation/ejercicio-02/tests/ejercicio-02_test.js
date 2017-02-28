var assert = require('assert');
var Crud = require('../ejercicio-02.js')

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
describe('arrayCRUD', function(){

  it("should raise an error if no array is provided", function(){
    assert.deepEqual(Crud.arrayCRUD(undefined,"suma"),"Error")
  })

  it("should raise an error if we try to use any other variable type instead of an array", function(){
    assert.deepEqual(Crud.arrayCRUD(1,"suma"),"Error")
    assert.deepEqual(Crud.arrayCRUD(null,"suma"),"Error")
    assert.deepEqual(Crud.arrayCRUD("123","suma"),"Error")
  })

  it("should raise an error if operation is not provided", function(){
    assert.deepEqual(Crud.arrayCRUD([1,2],undefined),"Error")
  })

  it("should raise an error if wrong operation name is provided", function(){
    assert.deepEqual(Crud.arrayCRUD([1,2],"sumaRR"),"Error")
  })

})
