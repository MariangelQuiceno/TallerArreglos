// Cree una función que reciba un arreglo de cadenas de ADN (las cadenas estarán formadas por las 
// letras A o C o T o G referirse a taller de ADN pasado) y muestre la cadena de ADN con mayor número 
// de Timina (T). Se le debe pedir al usuario que introduzca los arreglos

  
let arregloADN = prompt("Introduce las cadenas de ADN, separadas por comas:").split(",");
encontrarCadenaMayorT(arregloADN);

 
function contarLetraT(cadena) {
    let contadorT = 0;
  
    for (let i = 0; i < cadena.length; i++) {
      if (cadena[i] === "T") {
        contadorT++;
      }
    }
  
    return contadorT;
  }


function encontrarCadenaMayorT(arregloADN) {
    let cadenaMayorT = "";
    let maximoT = 0;
  
    for (let i = 0; i < arregloADN.length; i++) {
      let cadena = arregloADN[i];
      let cantidadT = contarLetraT(cadena);
  
      if (cantidadT > maximoT) {
        maximoT = cantidadT;
        cadenaMayorT = cadena;
      }
    }
  
    console.log("La cadena de ADN con mayor número de Timina (T) es:");
    console.log(cadenaMayorT);
  }
 
  
