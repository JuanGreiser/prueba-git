// comvinar valores de un array con valores de otro array;

let peliculasDeAccion = ['Rambo','AVengers','spiderman'];

let peliculasComedia = ['Mi pobre Angelito', 'The hangover'];

let todasLasPelis = [...peliculasDeAccion,...peliculasComedia]

console.log(todasLasPelis)

// agregar las propiedades de un objeto dentro de otro objeto

let obraSocial = {
    ObraSocial: 'swiss-medical',
    plan: 'pepe'
};

let juan = {
    nombre: 'Juan',
    apellido: 'Rodriguez Greiser',
    NumeroDeDocumento: 43082088,
    ...obraSocial
};

let oreo = {
    nombre: 'oreo',
    apellido: 'pepita',
    NumeroDeDocumento: 43587899,
    ...obraSocial
};

console.log(juan);
console.log(oreo);



// FUNCTION = podemos utiliazr esto para 


function sumar(...numeros){
    let contador = 0;
        for(let i=0; i<numeros.length; i++){
            contador = contador + numeros[i];
        }
        return contador;
}

let suma = sumar(10,20,30);
console.log(suma);