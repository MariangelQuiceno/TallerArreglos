// Cree una función que reciba un arreglo de letras no repetidas y lo retorne ordenado alfabéticamente.
// Se le debe pedir al usuario que introduzca el arreglo

let arregloLetras = prompt("Introduce las letras no repetidas, separadas por comas:").split(",");
let arregloOrdenado = ordenarArregloLetras(arregloLetras);

function ordenarArregloLetras(arreglo) {
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
  

  
  console.log("Arreglo ordenado alfabéticamente:");
  console.log(arregloOrdenado);
  