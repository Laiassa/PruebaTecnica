# Aplicación Web de Recomendación de Películas

## Descripción General del Proyecto
### Funcionalidades:
1. Autenticación de Usuarios: Los usuarios pueden registrarse e iniciar 
sesión. (base de datos no relacional)
2. Recomendaciones de Películas: Recomendaciones personalizadas basadas en 
las preferencias del usuario. (base de datos relacional)
3. Búsqueda y Reseñas: Los usuarios pueden buscar películas y dejar reseñas. 
(Cargas variables)
4. Integración con Microservicios Externos:
- Servicio de Detalles de Películas: Obtener metadatos de películas (título, 
sinopsis, actores).
- Servicio de Recomendaciones: Obtener recomendaciones basadas en el 
historial de visualización del usuario.

## Arquitectura
El usuario se conecta con la página a través de Route 53, encargado de 
asignar un DNS a una IP particular, luego las solicitudes de los clientes 
llegan a un ALB (HTTP/HTTPs), que direcciona el tráfico hacia las 
instancias EC2 disponibles en el frontend de ambas zonas de 
disponibilidad.
Luego, en el frontend ubicado en una subnet pública, se tiene el código de 
React.js en Instancias EC2 con ASG (auto scaling group), para poder 
escalar (in/out) de forma horizontal según necesario, teniendo así un uso 
óptimo de la capacidad de las instancias, ahorrando costos.
Luego la Instancia EC2 se conecta a las distintas bases de datos que se 
encuentran en una subnet privada, según sea necesario. En el caso de 
consultar sobre recomendaciones personalizadas, dejar reseñas y 
relacionarlos con datos de usuario, la instancia consulta a la base de 
datos relacionales Amazon RDS por su backup continuo, capacidad de 
escalamiento, read réplicas y multi AZ setup.
También conectamos a la instancia ElastiCache, para tener mejor tiempo de 
respuesta y performance.
Luego para datos no relacionales como almacenar metadatos de películas, 
géneros y  datos de usuarios, utilizamos DocumentDB, debido a su 
simplicidad y uso con MongoDB (replicable a través de 3 AZ,  optimizado, 
escalado automático).
Por último, se realiza una comunicación con dos Microservicios Externos:
- API de TMDb (metadatos de películas e imágenes).
- API de IMDB (servicio externo para lógica de recomendaciones).

