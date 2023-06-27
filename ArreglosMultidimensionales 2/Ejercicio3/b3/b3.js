/* 3. Dado el arreglo [ [2, 8, 9], [30, 71, 77], [11, 990, 41]]:

b) Recorrer todos sus elementos más internos y mostrar la suma de estos. Como sugerencia use una variable
para acumular la suma, declarela antes del ciclo. Use cualquier ciclo, for o forEach. */

let arreglo3B = [ 
    
    [2, 8, 9], 
    [30, 71, 77], 
    [11, 990, 41]

];

let acumuladora = 0;


for (let i = 0; i < arreglo3B.length; i++) {
    for (let j = 0; j < arreglo3B[i].length; j++) {
    acumuladora = acumuladora +  arreglo3B[i][j]

    } 
}

    console.log(acumuladora);
    

 