// levantamos un Web Server;

const http = require('http');

http.createServer(function(req,res){

    switch(req.url){
        case '/':
            res.end('home');
            break;
        case '/pilar':
            res.end('te amo mi amor');
            break;
        default: 
            res.end("error, intente de nuevo mas tarde");
            break;
    
    }

}).listen(3030, "localhost");

// levantamos un Web Server;


/*
const http = require('http');

http.createServer(function(req,res){


    res.writeHead(200,{'content-Type': 'text/plain'});
    let pilar = ("estoy muy enamorado de mi novia")
    res.end(pilar);
    
}).listen(3030, "localhost");
*/