/*4. Dado el arreglo [ [50, 60, 70], [“q”, “%”, “$”], [“?”, “>”, “<”], [1 , -8, -2] ]

b) Cambiar el elemento -8 por el elemento 9. Verifique el cambio usando console.log.*/

let arregloDimension2 = [ 
    [50, 60, 70], 
    ['q', '%', '$'], 
    ['?', '>', '<'], 
    [1 , -8, -2] 
];

arregloDimension2[3][1] = 9;
console.log(arregloDimension2[3][1]);