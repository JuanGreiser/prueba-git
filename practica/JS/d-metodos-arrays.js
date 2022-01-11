let numeros = [2,4,6,18,19];

/////////////////////////////////////////// 
// map: recorre el array y retorna un array nuevo con la misma cantidad de elementos aplicando la funcion programada sobre cada uno
let dobleDeLosNumeros = numeros.map(function(unNumero){
    return unNumero*2;
})


///////////////////////////////////////////
// filter = recorre el array y filtra los elementos dependiendo tu logica. luego crea un array nuevo con los elementos que cumplan con su condicion.
let numerosMayores = numeros.filter(function(edad){
    return edad >=18;
})

///////////////////////////////////////////
// reduce = recorre el array y retorna un unico valor aplicando la funcion
let resultadoSuma = numeros.reduce(function(acumulador,numero){
    return acumulador*numero;
})

///////////////////////////////////////////
// forEach = iterar sobre un array dado
let frase=['hola','mundo','!!']

        frase.forEach(function(palabra){
        //console.log(palabra)
        })
        
let notas = [3,5,8,10,9,7,8,8]
        
        notas.forEach(function(valor,indice){
       // console.log('el valor '+valor+' esta en el indice '+ indice)
        })


///////////////////////////////////////////
// ej complicado de practica
let array=['ndjnfsuuasdiaoadoakaokainfjn']
let i=0;

    for(i; i<array[0].length;i++){
        array.forEach(function(letras){
      //  console.log(letras[i])
        
        })
    }



//////////////////////////////////////////////////////////////////////////////////////
//DESTRUCTURING
// declaramos un array, despues en una variable como nombre le asignamos un string en la posicion que se encuentra el dato que queremos extraer
let colores = ['Rojo', 'Azul','Amarillo'];
let[a,,b] = colores;
let[,z,] = colores;

console.log(a,b);

console.log(z);

