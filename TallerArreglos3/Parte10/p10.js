// Cree una función que reciba un arreglo de nombres de personas y muestre si la letra “c” se
// encuentra entre tales nombres, en caso de que la letra “c” se encuentre, mostrar las veces que se
// encuentra(considerando las apariciones entre todos los nombres) . Se le debe pedir al usuario que
// introduzca el arreglo.


let nombres = prompt("Introduce los nombres de personas, separados por comas:").split(",");

letrac(nombres);

function letrac(nombres) {
    let contador = 0;
     for (let i = 0; i < nombres.length; i++) {
      let nombreV = nombres[i];
      for (let j = 0; j < nombreV.length; j++) {
        if (nombreV[j].toLowerCase() == 'c') {
          contador++;
        }
      }
    }
  
    if (contador > 0) {
      console.log("La letra 'c' está presente en la mayoría de nombres.");
      console.log("Se encuentra", contador, "veces en total.");
    } else {
      console.log("La letra 'c' no se encuentra en los nombres.");
    }
  }
  
  