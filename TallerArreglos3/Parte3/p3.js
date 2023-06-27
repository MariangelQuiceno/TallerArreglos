// 3. Cree una función que reciba un arreglo de números y retorne el número menor entre todos los
// elementos del arreglo.

function encontrarNumeroMenor(arreglo) {
  if (arreglo.length === 0) {
    return console.log("numero no encontado")
  }

  return Math.min(...arreglo);
}


let numeros = [3, 5, 4, 33, 55, 86, 2, 6, 7, 5, 90];
let menorNumero = encontrarNumeroMenor(numeros);
console.log(menorNumero)
