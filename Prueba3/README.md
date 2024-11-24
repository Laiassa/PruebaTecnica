# Prueba 3: CI/CD
En esta prueba se:
- dockeriza un nginx con un index.html.
- La imagen creada es subida a un repositorio publico en DockerHub y
- es desplegada por el servicio ECS de mi cuenta de AWS.

## Pipeline
Se elaboro un pipeline en la plataforma de github, que se encuentra dentro de la carpeta .github, 
Este pipeline corre ante cada cambio realizado sobre el index.html de la rama main.
El pipeline se encarga de:
- actualizar la imagen en el repositorio DockerHub,
- actualizar el contenedor de aws para que despliegue la nueva imagen.

## AWS
En AWS, se utilizo el servicio:
- IAM: para dar permisos restringidos a un usuario para que solo pueda realizar las tareas que le corresponden.
- ECS, Fargate: para levantar el contenedor con la imagen subida a dockerhub.


