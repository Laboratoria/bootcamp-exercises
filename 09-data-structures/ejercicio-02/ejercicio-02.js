// Usar la funcion guardar guardar el elemento
// hasheado de la función stringToHash, dentro el arreglo hashTable
function guardar(string) {
  //No borrar
  var hashTable = []

  // No tocar este return
  return hashTable;
}

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
function stringToHash(string){
	var contadorDeSuma = 0;
	string.split("").forEach(function(letra){
		contadorDeSuma += letra.charCodeAt(0)
	});

	return contadorDeSuma;
}

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
if(typeof exports !== 'undefined') {
    exports.guardar = guardar;
}
