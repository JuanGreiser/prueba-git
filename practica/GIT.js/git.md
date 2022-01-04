Git : es un software de control de versiones;
Git : te permite gestionar las diferentes versiones de tus archivos;


1) vamos a git y creamos nuestro repositorio : ej prueba node;

2) Creamos un repo local: nos paramos en la carpeta y escribimos:
 ## git init

asignamos nombre de usuario al repo:
## git config user.name "JuanGreiser"

asignamos mail de usuario al repo:
## git config user.email "rodriguezgreiserjuan@gmail.com"

enlazamos el repo LOCAL con repo en la NUBE
## git remote add origin "url"
verifica git remote -v


Agregamos los archivos al repositorio local
## git add .
## git add "nombre de un archivo"

## git status 
## git commit -m mensaje

PUSH al repositorio en la nube;

## git push origin master

Ver los commits realizados
## git log 

actualizar archivos del repo
## git pull

bajar archivos de un repo
## git clone "url"

cambiar el nombre de la rama : 
## git branch -m nombre
