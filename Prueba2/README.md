# Prueba 2: Creacion de app To Do List

## Descripcion de la aplicacion
En esta prueba se elaboro una aplicacion en Django (backend) con frontend en React.js, es una aplicacion fullstack donde se puede:

- crear notas con un titulo y contenido
- revisar todas las notas con su respectivo momento de creacion
-  guardar los datos en una base de datos de Django
-  utilizar REST API, para la comunicacion del backend y frontend

### Contenerizado de la app:

Se desplega un contenedor para el backend y otro para el frondtend, cada uno tiene su respectivo dockerfile para crear la imagen correspondiente a cada contenedor. 
Luego se utiliza un docker-compose para la orquestracion de estos contenedores.

## Instrucciones para el Despliegue:
### En una PC 
#### Requisitos mínimos en tu computadora
##### Docker instalado:
Descarga e instala Docker Desktop o Docker Engine en tu máquina. Esto es lo esencial porque todo corre dentro de los contenedores.
##### Git:
Necesitarás git para clonar el repositorio si no lo has hecho ya.
#### Pasos
1. Copiar el contenido de este repositorio en tu PC local,
   "git clone https://github.com/Laiassa/PruebaTecnica.git"
2. Navegar a la carpeta correspondiente
   " cd PruebaTecnica/Prueba2 "
3. En la terminal buildear las imagenes a partir de los dockerfiles
   " docker-compose build "
4. levantar los contenedores:
   " docker-compose up -d "
5. Ir a "http://localhost:3000"

6. Limpieza:
   
         - primero hago stop de los containers andando con " docker stop $(docker ps -q) "
   
         - luego elimino todos los containers, andando y parados con " docker rm $(docker ps -aq) "

### En AWS
#### Pre-requisitos:
Tener una cuenta de AWS.

#### Pasos para el Despliegue:
1. crear una instancia EC2 con una imagen de linux
2. configurar el security group de forma que permita acceso a internet y crear una regla TCP custom de inbound que habilite el puerto 3000.
3. colocar en opciones avanzadas el codigo subido al repositorio llamado "UserData"
4. luego buscar la ip de la instancia, y abrir el puerto 3000 de esa ip en el navegador.

   

