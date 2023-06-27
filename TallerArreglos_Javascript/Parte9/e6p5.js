// Cree una función que reciba una letra del alfabeto y muestre si tal letra corresponde a algún elemento del siguiente arreglo
// ["a", "b", "c", "d", "e", "f", "g"] Use ciclo for (con .length) en la solución de este problema

let arreglo = ["a", "b", "c", "d", "e", "f", "g"]

let letra = prompt("Ingrese una Letra")
let letraV = buscarLetra(letra)

function buscarLetra(letra) {
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i] === letra) {
        console.log("La letra", letra, "corresponde a un elemento del arreglo");
      }else{
        console.log("La letra", letra, "no corresponde a un elemento del arreglo");
      }
        return;
      }
    }


console.log(letraV)