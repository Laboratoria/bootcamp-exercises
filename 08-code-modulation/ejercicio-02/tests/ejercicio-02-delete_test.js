var assert = require('assert');
var Crud = require('../ejercicio-02.js')

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
describe("D.elete", function(){
    it('should succesfully remove the last item ', function(){
      assert.deepEqual(Crud.arrayCRUD([1,2,3],"delete"),[1,2])
    })

    it('should return the array itself if provided an empty array', function(){
      assert.deepEqual(Crud.arrayCRUD([],"delete"),[])
    })
})
