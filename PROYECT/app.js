const http = require('http');

const express = require('express');
const app = express();

// levantando servidor 
app.listen(3000, ()=>{
    console.log('Running server')
});

// rutes
app.get('/', function(req, res){
    res.send('welcome to university internasional');
})

app.get('/Universidades', function(req, res){
    res.send('Estudia en nuestras universidades');
})

app.get('/cursos', function(req, res){
    res.send('Estos son los cursos que tenemos');
})

app.get('/contact', function(req, res){
    res.send('complete el formulario y comuniquese con nosotros');
})