/* 2. Dado el arreglo [ [ ["%", 7, true, "#"] , ["&", 55, false, "="] ], [ [false, 0, 99, "?"] , [true, 1000, “@”, "¡"] ], [ [44, 55, 66, 77], [1, 2, 3, 4] ] ]

b) Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo forEach */



let arreglo2B = [ 
    [ ["%", 7, true, "#"] , ["&", 55, false, "="] ], 
    [ [false, 0, 99, "?"] , [true, 1000, "@", "¡"] ], 
    [ [44, 55, 66, 77], [1, 2, 3, 4] ] 
];


arreglo2B.forEach(i => 
    { i.forEach(j => 
    { j.forEach( x =>
    { console.log(x) })}) })



