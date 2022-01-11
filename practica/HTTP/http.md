#  Web server en mi PC!

- requerimos el modulo http

- utilizamos el metodo http.createserver()

- sobre createserver ( un objeto literal) ejecutamos la propiedad .listen(3030,"localhost") indicando como parametros la direccion del puerto;

- callback http.createserver(function(req,res){
});

servidor levantado, ahora vamos a crear la pagina;

# mostrar algo objeto res :
- res.writeHead(200, tipo de contenido texto plano, texto html, texto JSon);
- codigo que vamos a enviar res.end("Mi primer server con node");

# solicitar algo /routes req : 
-