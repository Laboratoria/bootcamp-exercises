//Implementar una funcion que calcule la conjetura de collatz para un número

// si la consola entra en un ciclo infinito de iteración,
// se puede romper presionando ctrl + c en tu teclado
function isEven(n){
  if(n%2 == 0){
    return true
  }
}

function isOdd(n){
  if(n%2 != 0){
    return true
  }
}

function collatz(n) {
  //Escribe tu codigo aqui

  if(typeof n != "number"){
    return "Error"
  }

  if( n==1){
    return 0;
  }
  if (isEven(n)) {
    return 1 + collatz(n/2);
  }
  else if (isOdd(n)) {
    return 1 + collatz((3*n)+1);
  }
}

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
if(typeof exports !== 'undefined') {
    exports.collatz = collatz;
}
