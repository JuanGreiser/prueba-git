///////////////////////////////////////////
// FOR IN = cuando quieras iterar sobre un objeto literal 
// key = variable iteradora de atributos
let persona = {
    nombre: 'pepe',
    apellido: 'pepito'
}

for (const key in persona) {
   // console.log('en el atributo '+ key +' se encuentra el valor '+persona[key])
}

///////////////////////////////////////////
//FOR OF = cuando quieras iterar sobre un array

let personitas = [{
    nombre: 'pepe',
    apellido: 'pepito'
},
{
    nombre:'juan',
    apellido:'rodriguez'
},
{
    nombre:'franco',
    apellido:'giovanelli'
}];

for (const iterator of personitas) {
    console.log(iterator)
}
