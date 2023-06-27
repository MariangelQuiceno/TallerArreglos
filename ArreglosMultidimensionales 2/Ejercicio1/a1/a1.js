/* 1. Dado el arreglo [ ["a", "z", "t"], [789, 887, 451], [true, false, 0] ]:

a) Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo for */

let arreglo1A = [ 
    ["a", "z", "t"], 
    [789, 887, 451], 
    [true, false, 0] 
];

for (let i = 0; i < arreglo1A.length; i++) {

for (let j = 0; j < arreglo1A[i].length; j++) {
  console.log(arreglo1A[i][j]);
}
}
