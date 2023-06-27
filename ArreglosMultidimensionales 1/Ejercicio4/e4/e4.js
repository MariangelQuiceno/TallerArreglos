/*4. Dado el arreglo [ [50, 60, 70], [“q”, “%”, “$”], [“?”, “>”, “<”], [1 , -8, -2] ]

e) Eliminar el elemento 70. Verifique el cambio usando console.log, imprima todo el arreglo.*/

let arregloDimension2 = [ 
    [50, 60, 70], 
    ['q', '%', '$'], 
    ['?', '>', '<'], 
    [1 , -8, -2] 
];

arregloDimension2[0].splice(2);
console.log(arregloDimension2);
