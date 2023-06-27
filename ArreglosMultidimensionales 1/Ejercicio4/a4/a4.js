/*4. Dado el arreglo [ [50, 60, 70], [“q”, “%”, “$”], [“?”, “>”, “<”], [1 , -8, -2] ]

a) Cambiar el elemento % por el elemento ?. Verifique el cambio usando console.log.*/

let arregloDimension2 = [ 
    [50, 60, 70], 
    ['q', '%', '$'], 
    ['?', '>', '<'], 
    [1 , -8, -2] 
];
arregloDimension2[1][1] = '?';
console.log(arregloDimension2[1][1]);
