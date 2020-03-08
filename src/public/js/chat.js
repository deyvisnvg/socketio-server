const socket = io();

let output = document.getElementById("output");
let actions = document.getElementById("actions");
let username = document.getElementById("username");
let message = document.getElementById("message");
let btn = document.getElementById("send");

btn.addEventListener('click', eventClick);
message.addEventListener("keypress", eventKey); //Evento cuando alguien a presionado una tecla o cuando esta tipeando.

function eventClick() {
    socket.emit("chat:message", {
        username: username.value,
        message: message.value,
    });
    console.log("activado");
}

function eventKey() {
    socket.emit("chat:typing", username.value);
}

socket.on("chat:message", data => {
    actions.innerHTML = "";
    output.innerHTML += `<p><strong> ${ data.username }: </strong> ${ data.message }</p>`
    message.innerHTML = "";
});

socket.on("chat:typing", data => {
    actions.innerHTML = `<p> ${ data } esta escribiendo... </p>`;
});