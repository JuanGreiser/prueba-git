const express = require('express');
const app = express();

// levantando servidor 

app.listen(3000, ()=>{
    console.log('Running server')
})

// creamos rutas
app.get('/',function(req,res){
    res.send('Home');
})