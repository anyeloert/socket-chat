var socket = io();

const params = new URLSearchParams(window.location.search)

if (!((params.has('nombre')) && (params.has('sala')))){
    console.log('object');
    window.location = 'index.html'
    throw new Error('el nombre y la sala son necesarios')
}

const usuario = {
    nombre: params.get('nombre'),
    sala: params.get('sala')
}


socket.on('connect', function() {
    console.log('Conectado al servidor');

    socket.emit('guardarUsuario', usuario)
});

// escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});

socket.on('mensageGrupo', (data) => {
    console.log(data.mensaje);
})



// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

// Escuchar información
socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor:', mensaje);

});