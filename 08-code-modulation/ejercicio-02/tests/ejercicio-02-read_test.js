var assert = require('assert');
var Crud = require('../ejercicio-02.js')

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS

describe("R.ead",function(){
    it('should read the item based on the index', function(){
      assert.equal(Crud.arrayCRUD([1,2,3],"read",2),3)
    })

    it('should return an error if the index is invalid', function(){
      assert.equal(Crud.arrayCRUD([1,2,3],"read",5),"No existe ese item")
      assert.equal(Crud.arrayCRUD([1,2,3],"read",false),"No existe ese item")
    })

    it('should read any variable type', function(){
      assert.equal(Crud.arrayCRUD([1,2,"tres"],"read",2),"tres")
      assert.equal(Crud.arrayCRUD([1,2,false],"read",2),false)
    })
})
