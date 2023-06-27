/*4. Dado el arreglo [ [50, 60, 70], [“q”, “%”, “$”], [“?”, “>”, “<”], [1 , -8, -2] ]

c) Cambiar el elemento 50 por el elemento ¡. Verifique el cambio usando console.log.*/

let arregloDimension2 = [ 
    [50, 60, 70], 
    ['q', '%', '$'], 
    ['?', '>', '<'], 
    [1 , -8, -2] 
];

arregloDimension2[0][0] = '¡';
console.log(arregloDimension2[0][0]);