var assert = require('assert');
var HashTable = require('../ejercicio-02.js')

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
describe('guardar', function(){

  it("should succesfully add a character into de hash table",function(){
    var hashTable = new Array()
    hashTable[97] = "a"
    assert.deepEqual(HashTable.guardar("a"),hashTable)
  });



  it("should throw an error  when invalid input is provided",function(){
    assert.deepEqual(HashTable.guardar(false),"Error de dato")
  });

  it("should succesfully add a full string into de hash table",function(){
    var hashTable = new Array()
    hashTable[195] = "ab"
    assert.deepEqual(HashTable.guardar("ab"),hashTable)
  });
})
