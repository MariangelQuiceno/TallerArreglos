// Cree una función que reciba un arreglo de números enteros no repetidos y lo retorne ordenado de
// menor a mayor según el valor de tales elementos. Se le debe pedir al usuario que introduzca el arreglo

function ordenarArreglo(arreglo) {
    let longitud = arreglo.length;
  
    for (let i = 0; i < longitud - 1; i++) {
      for (let j = i + 1; j < longitud; j++) {
        if (arreglo[j] < arreglo[i]) {
          let temp = arreglo[i];
          arreglo[i] = arreglo[j];
          arreglo[j] = temp;
        }
      }
    }
  
    return arreglo;
  }
  
  let arregloNumeros = prompt("Introduce los números enteros no repetidos, separados por comas:").split(",").map(Number);
  let arregloOrdenado = ordenarArreglo(arregloNumeros);
  
  console.log("Arreglo ordenado de menor a mayor:");
  console.log(arregloOrdenado);
  