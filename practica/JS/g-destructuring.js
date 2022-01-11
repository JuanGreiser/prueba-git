// arrays

let colores = ['rojo','amarillo','verde','azul'];

let [color0,color1,,color3] = colores;

console.log('El primer color del array es el : '+ color0,' el segundo color es: '+ color1,' y el tercer color del array es : ' + color3);


// objetos 

let persona = {
    nombre: 'Juan',
    apellido: 'Rodriguez Greiser',
    serieFav: ['Prision-Break','suits'],
    Profecion: 'Programador Web Full Stack'
}

let {nombre,serieFav,Profecion} = persona;

console.log(nombre,Profecion,serieFav[0]);