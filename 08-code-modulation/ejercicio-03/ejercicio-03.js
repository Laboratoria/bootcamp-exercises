//Implementar una funcion que calcule el factorial de
// un número

// si la consola entra en un ciclo infinito de iteración,
// se puede romper presionando ctrl + c en tu teclado

function factorial(n) {
  //Escribe tu codigo aqui
  if(n==1){
    return 1
  }
  else {
    return n * factorial(n-1);
  }

}

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
if(typeof exports !== 'undefined') {
    exports.factorial = factorial;
}
