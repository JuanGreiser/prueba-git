function agregarHTML(url){
    return 'html//' + url;
}

function procesamiento(lista,callback){

    let array = [];
    
        for(let i=0; i<lista.length;i++){
            array.push(callback(lista[i]));
        }
    return array;
}

var urlUtilizable = procesamiento(['pepe','pepito','pirulito'],agregarHTML);
console.log(urlUtilizable);