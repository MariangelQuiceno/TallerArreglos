/* 3. Dado el arreglo [ [2, 8, 9], [30, 71, 77], [11, 990, 41]]:

a) Recorrer todos sus elementos más internos y mostrar los números que sean impares. Use cualquier ciclo, for o
forEach. */


let arreglo3A = [ 
    
    [2, 8, 9], 
    [30, 71, 77], 
    [11, 990, 41]

];


for (let i = 0; i < arreglo3A.length; i++) {
    for (let j = 0; j < arreglo3A[i].length; j++) {
    if(arreglo3A[i][j] % 2 !== 0){
        console.log(arreglo3A[i][j])
    }

    }
    }

 