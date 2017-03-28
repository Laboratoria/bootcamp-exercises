var assert = require('assert');
var Code = require('../ejercicio-07');

// Pruebas unitarias
describe('codeHard', function() {
  it("debe retornar 'Code' si el número es divisible entre 3", function(){
    assert.equal(Code.codeHard(18), "Code");
    assert.notEqual(Code.codeHard(3), "code");
  });
  it("debe retornar 'Hard' si el número es divisible entre 5", function(){
    assert.equal(Code.codeHard(10), "Hard");
    assert.notEqual(Code.codeHard(5), "hard");
  });
  it("debe retornar 'CodeHard' si el número es divisible entre 5 y 3", function(){
    assert.equal(Code.codeHard(15), "CodeHard");
    assert.notEqual(Code.codeHard(15), "codehard");
  });
  it("debe retornar el número si NO es divisible entre 5 o 3", function(){
    assert.equal(Code.codeHard(1), 1);
  });
  it("debe retornar Code, Hard, CodeHard, o el número sin importar que n sea un string", function(){
    assert.equal(Code.codeHard("18"), "Code");
    assert.equal(Code.codeHard("15"), "CodeHard");
    assert.equal(Code.codeHard(10), "Hard");
    assert.equal(Code.codeHard(1), 1);
  });
  it("debe retornar ERROR si no esta el parametro",function(){
    assert.equal(Code.codeHard(), "ERROR");
  });
});
