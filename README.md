# Crear y conectar una base de datos a un servidor con express:
## El esquema es una farmacia 


## Contenido

- Se creo un cluster en [https://www.mongodb.com/es/cloud/atlas/efficiency]
- Se creo para dicho cluster un usuario y contraseña
- El proyecto tiene dos rutas un GET /ver y POST /crear


## Librerias utilizadas

- [Node.js] - Es un entorno de ejecución JavaScript de código abierto y multiplataforma que se utiliza para desarrollar aplicaciones escalables del lado del servidor y de red. Está basado en el motor de ejecución JavaScript V8 de Google Chrome.
- [Express] - Express es un framework web transigente, escrito en JavaScript y alojado dentro del entorno de ejecución NodeJS. El modulo explica algunos de los beneficios clave de este framework, como configurar tu entorno de desarrollo y como realizar tareas comunes en desarrollo y publicación web.
- [Mongoose] - Mongoose es una librería para Node. js que nos permite escribir consultas para una base de datos de MongooDB, con características como validaciones, construcción de queries, middlewares, conversión de tipos y algunas otras, que enriquecen la funcionalidad de la base de datos.
- [Cors] - Es una característica de seguridad del navegador que restringe las solicitudes HTTP de origen cruzado que se inician desde secuencias de comandos que se ejecutan en el navegador.
- [Morgan] - Es una gran herramienta que registra las requests junto con otra información dependiendo de su configuración y el ajuste preestablecido utilizado. Resulta muy útil durante la depuración y también si desea crear archivos de registro.



## Datos para usar de ejemplo:


{

    "razonSocial": "Mi Farmacia SRL",
    "nombreFantasia": "La Nueva",
    "cuit": 21456327897,
    "direccion": "Ruta 15 km 25",
    "telefono": "481 7896",
    "mail": "farmacia.lanueva@gmail.com",
    "codigoPagoElectronico": 123456789,
    "farmaciaActiva": true
}

{

    "razonSocial": "Donar SA",
    "nombreFantasia": "Siempre Cerca",
    "cuit": 51454533891,
    "direccion": "Osorio 5641",
    "telefono": "221 4566",
    "mail": "farmacia.donar@gmail.com",
    "codigoPagoElectronico": 987654321,
    "farmaciaActiva": true
}


## Rutas para probar en Postman:

| Método | Ruta |
| ------ | ------ |
| GET | [http://localhost:8080/api/verFarmacias]|
| POST | [http://localhost:8080/api/crearFarmacia]|