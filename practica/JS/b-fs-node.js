const fs = require('fs');



// creo un archivo y le pongo un texto plano
//---------------------------------------------------------
fs.writeFile('HolaMundo.txt','Hola Mundo!!!',(error)=>{
    if(error){
        console.log('error: ${error}1');
    }else{
       // console.log('se genero bien 1');
    }
})

// leo un archivo

const textoPlano = fs.readFileSync(__dirname+'/HolaMundo.txt','utf-8');
console.log(textoPlano);


//renombrar un archivo BIEN

fs.rename('HolaMundo.txt','Hola-Mundo.txt',(error)=>{
    if(!error){
        console.log("¡renombredo!")
    }else{
        console.log('error: ${error}3');
    }
})

//leo un archivo BIEN

fs.readFile('HolaMundo.txt','utf-8',(error,data)=>{
    if(!error){
        console.log(data);
    }else{
        console.log('error: ${error}');
    }
})


//agregar contenido al archivo BIEN
//---------------------------------------------------------
fs.appendFile('HolaMundo.txt','\n Mi nombre es JuanUx!!!',(error)=>{
    if(!error){
        console.log('Contenido agregado')
    }else{
        console.log('error: ${error}4');
    }
})


//back-up
fs.createReadStream('HolaMundo.txt').pipe(fs.createWriteStream('BackUp.txt'));




//eliminamos unu archivo
fs.unlink('HolaMundo.txt',(error)=>{
    if (error){
        console.log('error: ${error}');
    }
})


// mostrar todos los archivos -------- es lo mismo que correr dir
fs.readdir('./',(error, archivos)=>{
    archivos.forEach(archivo=>{
        console.log(archivo);
    })
})