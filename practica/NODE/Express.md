- Express es un freamwork, una funcion de Node que trae muchas funcionalidades automatizadas para codear paginas web y mobile.
# npm install express --save
- guardamos la ejecucion en una variable la cual vamos a utilizar.
# const app = express();


- Levantamos un servidor con express: 
# app.listen(3000,()=>{ });


- SISTEMA DE RUTEO CON EXPRESS;

# app.METHOD(path, habdler);
 -app.get('/', function(res,req){ res.send('home') });


- ALGUNOS METODOS DE EXPRESS: 
  ## app.method(); 
    - get
    - post
    - put
    - delete
  ## request.path();
    - para saber la url exacta de donde viene un request.
  ## request.method();
    - para saber si vino por get o post.
  ## response.send(); 
    - te permiten enviar como rta al brouser un string un objeto o un array de forma facil.

