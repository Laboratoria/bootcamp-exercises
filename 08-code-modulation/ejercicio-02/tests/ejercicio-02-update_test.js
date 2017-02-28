var assert = require('assert');
var Crud = require('../ejercicio-02.js')

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
describe("U.pdate", function(){
    it('should succesfully edit an item based on the index as param, ', function(){
      assert.deepEqual(Crud.arrayCRUD(
        [1,2,3], //array as input
        "update", // operation to do
        2,   // index to modify
        "new value" //new value to update in array[index]
      ),
        [1,2,"new value"] //expected value
      )
    })

    it('should return an error if the index of the item does not exists', function(){
      assert.equal(Crud.arrayCRUD(
        [1,2,3], //array as input
        "update", // operation to do
        7,   // index to modify
        "new value" //new value to update in array[index]
      ),
       "No existe ese item" //expected value
      )
    })
})
