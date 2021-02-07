const { io } = require('../server');
const { Usuarios } = require('../classes/usuarios')

const usuarios = new Usuarios()

io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.on('guardarUsuario', (data) => {
        
        usuarios.crearUsuario(client.id, data.nombre, data.sala)
        client.join(data.sala)

        client.broadcast.to(data.sala).emit('mensageGrupo', {mensaje: `${data.nombre} se ha unido al chat`})
    })




    client.on('disconnect', () => {
        console.log('Usuario desconectado');
        
        const usuarioEliminado = usuarios.eliminarUsuario(client.id)
        console.log(usuarioEliminado.sala);
        client.broadcast.to(usuarioEliminado.sala).emit('mensageGrupo', {mensaje: `${usuarioEliminado.nombre} ha dejado el chat`})

    });

    // Escuchar el cliente
    

});