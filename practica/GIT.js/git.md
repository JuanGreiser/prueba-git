Git : es un software de control de versiones;

Git : te permite gestionar las diferentes versiones de tus archivos;

1) Back-up de archivos completamente actualizados;
2) La posibilidad de compartir uestro trabajo;

GitHub : es un lugar en la nube donde podes guardar tus proyectos.

    -repositorio : donde tenes el proyecto.
        -remoto : repo que esta en github
        -local : repo que esta en su computadora.

1) vamos a git y creamos nuestro repositorio : ej prueba node;

2) Creamos un repo local: nos paramos en la carpeta y escribimos:
 ## git init;

asignamos nombre de usuario al repo:
## git config user.name "JuanGreiser"

asignamos mail de usuario al repo:
## git config user.email "rodriguezgreiserjuan@gmail.com"

enlazamos el repo LOCAL con repo en la NUBE
## git remote add origin "url"
verifica git remote -v


3) Agregamos los archivos al repositorio local

indicamos el o los archivos que queremos agregar 

## git add .
## git add "nombre de un archivo"

te dice el estatus de tus archivos con respecto al repo

## git status 

ver los commits realizados;
## git log 


4) confirmamos el archivo y lo subimos a gitHub


## git commit -m mensaje
