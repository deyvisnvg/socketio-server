const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const { PORTD } = require('../config');

//Inicializamos nuestra aplicación
const app = express();

//Static files
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "views")));

//settings //app.set("envía datos a la aplicación")
app.set("port", process.env.PORT || PORTD);//Que tome el puerto del Sistema Operativo a través de la variable process.env.PORT, en caso no lo haya que tome el puerto 3000. //Esto sirve para cuando lo puedes desplegar en un entorno por ejemplo en un entorno de la 'nube' que ya tenga todo configurado y te da un puerto Pre-definido.

//Cuando nuestro servidor ya esté listo, se los pasamos como parámetro a 'socektIO(server)'
const server = app.listen(app.get("port"), () => { // Con 'app.get("port")' obtenemos el valor de la variable.
    console.log('Servidor activo en el puerto', app.get("port")); //Con la coma(,) lo concatenamos con el número del puerto.
});

//Settings socket.io //Inicializamos la comunicación o mi servidor ya puede empezar a utilizar los wbsockets
const io = socketIO(server);

require("./sockets")(io);
