// Cree una función que reciba un arreglo de números enteros y retorne el número mayor en él. Se le
// debe pedir al usuario que introduzca el arreglo

function encontrarNumeroMayor() {
    let numeros = prompt("Introduce los números separados por comas:");
    
    let arregloNumeros = numeros.split(",");
    let mayor = parseInt(arregloNumeros);
  
    for (let i = 1; i < arregloNumeros.length; i++) {
      let numero = parseInt(arregloNumeros[i]);
      if (numero > mayor) {
        mayor = numero;
      }
    }
  
    return mayor;
  }
  
  let numeroMayor = encontrarNumeroMayor();
  console.log("El número mayor es:", numeroMayor);
  