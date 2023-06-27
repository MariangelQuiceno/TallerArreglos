// Dado el arreglo ["Maria", "Pedro", "Juan", "Pablo", "Diana"] usar un ciclo y un condicional para
// mostrar si el nombre Juan se encuentra dentro del arreglo

let arreglo = ["Maria", "Pedro", "Juan", "Pablo", "Diana"]

let encontrado = false;

for (let i = 0; i < arreglo.length; i++) {
  if (arreglo[i] === "Juan") {
    encontrado = true;
    break;
  }
}

if (encontrado == true) {
  console.log("El nombre Juan se encuentra en el arreglo.");
} else {
  console.log("El nombre Juan no se encuentra en el arreglo.");
}
