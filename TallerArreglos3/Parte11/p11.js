// Cree una función que reciba un arreglo de números enteros positivos y muestre cuantos números impares posee el arreglo. Se le debe pedir al usuario que introduzca el arreglo

function Impares() {
   
    let contador = 0;
  
    for (let i = 0; i < arregloNumeros.length; i++) {
      if (arregloNumeros[i] % 2 !== 0) {
        contador++;
      }
    }
  
    console.log("El arreglo tiene", contador, "números impares.");
  }
  
  let arregloNumeros = prompt("Introduce los números enteros positivos, separados por comas:").split(",").map(Number);

Impares(arregloNumeros)

  