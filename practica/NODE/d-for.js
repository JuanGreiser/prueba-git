// FOR IN : iterar sobre un objeto literal

let persona = {
    nombre: 'Juan Rodriguez Greiser',
    apellido: 'pepito',
    edad: 20
}

    for(const key in persona){
        console.log('en la propiedad ' + key +' se encuentra el valor '+persona[key]);
    }


// FOR OF = itera sobre un array

let notas = [9,2,7,9,8,7,2];


    /*for(let i=0; i<notas.length; i++){
        console.log(notas[i]);
    }
*/

    for(let unaNota of notas){
        console.log(unaNota);
    }