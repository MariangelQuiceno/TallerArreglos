//Dado los arreglos 
//valle = [“Cali” , “Tulua”, “Cartago” “Salento”] 
//quindio = [“Cordoba”, “Armenia”, “Palmira”, “Circasia”] 
// Ordene los arreglos de tal manera que los elementos(ciudades)
// queden en el arreglo que les corresponde. Use ciclos.

// Valle:
// Cali
// Tulua
// Cartago
// Córdoba

// Quindío:
// Armenia
// Palmira
// Circasia
// Salento

let valle = ["Cali" , "Tulua", "Cartago", "Salento"]
let quindio = ["Cordoba", "Armenia", "Palmira", "Circasia"] 


let valleOrdenado = [];
let quindioOrdenado = [];


for (let i = 0; i < valle.length; i++) {
  if (valle[i] == "Cali") {
    valleOrdenado[0] = "Cali";
  } if (valle[i] == "Tulua") {
    valleOrdenado[1] = "Tulua";
  } if (valle[i] == "Cartago") {
    valleOrdenado[2] = "Cartago";
  } if (valle[i] == "Salento") {
    quindioOrdenado[0] = "Salento";
  }
}

for (let i = 0; i < quindio.length; i++) {
  if (quindio[i] == "Cordoba") {
    valleOrdenado[3] = "Cordoba";
  } if (quindio[i] == "Armenia") {
    quindioOrdenado[1] = "Armenia";
  } if (quindio[i] == "Palmira") {
    quindioOrdenado[2] = "Palmira";
  } if (quindio[i] == "Circasia") {
    quindioOrdenado[3] = "Circasia";
  }
}

console.log("Valle del Cauca:");
for (let i = 0; i < valleOrdenado.length; i++) {
  console.log(valleOrdenado[i]);
}

console.log("\nQuindío:");
for (let i = 0; i < quindioOrdenado.length; i++) {
  console.log(quindioOrdenado[i]);
}


