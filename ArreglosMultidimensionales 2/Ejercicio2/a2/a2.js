/* 2. Dado el arreglo [ [ ["%", 7, true, "#"] , ["&", 55, false, "="] ], [ [false, 0, 99, "?"] , [true, 1000, “@”, "¡"] ], [ [44, 55, 66, 77], [1, 2, 3, 4] ] ]
a) Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo for

*/

let arreglo2A = [ 
    [ ["%", 7, true, "#"] , ["&", 55, false, "="] ], 
    [ [false, 0, 99, "?"] , [true, 1000, "@", "¡"] ], 
    [ [44, 55, 66, 77], [1, 2, 3, 4] ] 
];

for (let i = 0; i < arreglo2A.length; i++) {
for (let j = 0; j < arreglo2A[i].length; j++) {
for (let k = 0; k < arreglo2A [i][j].length; k++){
console.log(arreglo2A[i][j][k]);
}
}
}
