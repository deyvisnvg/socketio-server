//Lo que vamos a utilizar en ambos extremos cuando se comunica el servidor con el navegador, es empezar a escuchar eventos:
//El primer evento que vamos a escuchar en socket.io, es cuando se conecta un nuevo cliente.
module.exports = io => {
    io.on("connection", (socket) => {
        console.log("New user connected!", socket.id);
        
        socket.on("chat:message", data => {
            io.sockets.emit("chat:message", data);
        });

        socket.on("chat:typing", data => {
            socket.broadcast.emit("chat:typing", data);
        });
    });
}