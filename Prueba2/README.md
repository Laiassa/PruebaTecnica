# Prueba 2: Creacion de app Estetica
En esta prueba se elaboro una aplicacion en Django (backend) con frontend en React.js. 
Esta aplicacion consiste de una aplicacion para agendar turnos para una estetica. Se pueden agendar turnos de peluqueria, manicura y otros. Para esto se debe autenticar el usuario y elegir entre los horarios disponibles en la agenda, una vez elegido el turno este deja de estar disponible para el resto.
Esta aplicacion se encuentra dockerizada, lo que significa que se utiliza un dockerfile para generar una imagen para el backend, otro dockerfile para la imagen del frontend y luego se utiliza un docker-compose para desplegar ambas imagenes.

## Arquitectura General de la Aplicación
### Backend:

Usaremos Django para gestionar:
Servicios (peluquería, manicura, pestañas).
Turnos disponibles y reservados.
Proveerá APIs REST para que el frontend pueda comunicarse.
### Frontend:

Usaremos React.js para:
Mostrar los servicios disponibles.
Permitir a los usuarios seleccionar horarios y reservar turnos.
Conectar con las APIs del backend mediante Axios.
### Docker-Compose:

Se desplegarán ambos servicios (backend y frontend) en un único contenedor Docker.

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
   " cd Prueba-2/Estetica "
3. En la terminal buildear las imagenes a partir de los dockerfiles
   " docker-compose build "
4. levantar los contenedores:
   " docker-compose up -d "
5. Ir a "http://localhost:3000"

### En AWS
#### Pre-requisitos:
Tener una cuenta de AWS.

#### Pasos para el Despliegue:
1. crear una instancia EC2 con una imagen de linux
2. configurar el security group de forma que permita acceso a internet
3. colocar en opciones avanzadas el siguiente codigo:

"""
#!/bin/bash

# Actualizar los paquetes de la instancia
yum update -y

# Instalar dependencias necesarias (ejemplo para una app Node.js)
yum install -y git
yum install -y nodejs
yum install -y npm
yum install -y docker

# Clonar el repositorio desde GitHub (ajustar la URL de tu repo)
git clone https://github.com/usuario/mi-repo.git /home/ec2-user/mi-app

# Navegar al directorio de la app
cd /home/ec2-user/Prueba-2/Estetica

# Instalar dependencias de la aplicación (si es una app Node.js, por ejemplo)
npm install

# En la terminal buildear las imagenes a partir de los dockerfiles
docker-compose build

# levantar los contenedores:
docker-compose up -d

4. luego buscar la ip de la instancia, y abrir el puerto 3000 de esa ip en el navegador
"""
   

