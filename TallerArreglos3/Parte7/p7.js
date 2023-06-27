// Dados los arreglos arreglo1 = [“Pera”, “Cebolla”, “Limón”, “Pimentón”] arreglo2 = [“Manzana”, “Banano”, “Lechuga”, “Perejíl”] Ordene los arreglos de tal manera que los elementos(frutas y verduras) queden en el arreglo que les corresponde. Use ciclos

// frutas: pera, limon, pimenton, manzana, banano
// vegetales: cebolla, lechuga, perejil


let arreglo1 = ["Pera", "Cebolla", "Limón", "Pimentón"];
let arreglo2 = ["Manzana", "Banano", "Lechuga", "Perejíl"];

let frutas = [];
let vegetales = [];


for (let i = 0; i < arreglo1.length; i++) {
  if (arreglo1[i] == "Pera") {
    frutas[0] = "Pera";
  } if (arreglo1[i] == "Cebolla") {
    vegetales[0] = "Cebolla";
  } if (arreglo1[i] == "Limón") {
    frutas[1] = "Limón";
  } if (arreglo1[i] == "Pimentón") {
    frutas[2] = "Pimentón";
  }
}

for (let i = 0; i < arreglo2.length; i++) {
  if (arreglo2[i] == "Manzana") {
    frutas[3] = "Manzana";
  } if (arreglo2[i] == "Banano") {
    frutas[4] = "Banano";
  } if (arreglo2[i] == "Lechuga") {
    vegetales[1] = "Lechuga";
  } if (arreglo2[i] == "Perejíl") {
    vegetales[2] = "Perejíl";
  }
}

console.log("Frutas:");
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

console.log("\nVegetales:");
for (let i = 0; i < vegetales.length; i++) {
  console.log(vegetales[i]);
}
