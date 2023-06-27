// Cree una función que reciba dos arreglos de números enteros y muestre cual arreglo tiene un
// promedio mayor de sus elementos. Se le debe pedir al usuario que introduzca los arreglos

let arreglo1 = prompt("Introduce los elementos del arreglo 1, separados por comas:").split(",");
let arreglo2 = prompt("Introduce los elementos del arreglo 2, separados por comas:").split(",");

let numerosT1 = arreglo1.map(Number);
let numerosT2 = arreglo2.map(Number);

function compararPromedios(numeros1, numeros2) {
  let promedio1 = calcularPromedio(numeros1);
  let promedio2 = calcularPromedio(numeros2);

  if (promedio1 > promedio2) {
    console.log("El arreglo 1 tiene un promedio mayor.");
  } else if (promedio1 < promedio2) {
    console.log("El arreglo 2 tiene un promedio mayor.");
  } else {
    console.log("Ambos arreglos tienen el mismo promedio.");
  }
}

function calcularPromedio(arreglo) {
  let suma = 0;
  for (let i = 0; i < arreglo.length; i++) {
    suma += arreglo[i];
  }
  return suma / arreglo.length;
}

compararPromedios(numerosT1, numerosT2);
