//2. Dado el arreglo de cadenas de ADN [“AATGAAC”, “GTTTTTC”, “GGTAAA”, “CCCCATGGG”]
//cree una función que reciba como argumento tal arreglo y muestre las cadenas de una sola base
//(cadenas formadas solo de A, o solo de T, o solo de C o solo de G) que se pueden formar entre todos los
//elementos del arreglo.

function encontrarCadenasDeUnaBase(arregloADN) {
    let basesValidas = ["A", "T", "C", "G"];
    let cadenasUnaBase = [];
  
    for (let i = 0; i < basesValidas.length; i++) {
      let base = basesValidas[i];
      let esCadenaUnaBase = true;
  
      for (let j = 0; j < arregloADN.length; j++) {
        let cadena = arregloADN[j];
  
        if (cadena.indexOf(base) == -1) {
          esCadenaUnaBase = false;
          break;
        }
      }
  
      if (esCadenaUnaBase == true) {
        cadenasUnaBase.push(base.repeat(arregloADN.length));
      }
    }
  
    console.log("Cadenas de una sola base encontradas:");
    console.log(cadenasUnaBase);
  }
  
  let arregloADN = ["AATGAAC", "GTTTTTC", "GGTAAA", "CCCCATGGG"];
  encontrarCadenasDeUnaBase(arregloADN);


  

  
