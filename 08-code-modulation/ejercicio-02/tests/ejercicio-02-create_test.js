var assert = require('assert');
var Crud = require('../ejercicio-02.js')

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS

describe("C.reate", function(){
    it('should create an new item at the end of the array', function(){
      assert.deepEqual(Crud.arrayCRUD(
        [1,2,3],
        "create",
        undefined, // undefined because there is no index in create
        4
        ),
        [1,2,3,4]
      )
    })

    it("should allow insertion of any variable type", function(){
      assert.deepEqual(Crud.arrayCRUD([1,2,3],"create",undefined,"new value"),[1,2,3,"new value"])
      assert.deepEqual(Crud.arrayCRUD([1,2,3],"create",undefined,true),[1,2,3,true])
      assert.deepEqual(Crud.arrayCRUD([1,2,3],"create",undefined,null),[1,2,3,null])
    })
})
