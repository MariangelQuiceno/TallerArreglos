// Cree una función que pida a n número de usuarios su nombre y edad y retorne un arreglo con los
// nombres de los usuarios que son mayores de edad, luego muestre cuantos usuarios hay mayores de
// edad.

let cantidad = parseInt(prompt("Ingrese la cantidad de usuarios:"));
let cantidadM = mayores(cantidad);

function mayores(cantidad) {

    let usuariosMayores = [];

    for (let i = 0; i < cantidad; i++) {
      let nombre = prompt("Ingrese el nombre del usuario:");
      let edad = parseInt(prompt("Ingrese la edad del usuario:"));
  
      if (edad >= 18) {
        usuariosMayores.push(nombre);
      }
    }
  
    console.log("Usuarios mayores de edad:", usuariosMayores);
    console.log("Cantidad de usuarios mayores de edad:", usuariosMayores.length);
  
    return usuariosMayores;
  }
  
 
 
  