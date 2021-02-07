

class Usuario {
    constructor(id, nombre, sala) {
        this.id = id
        this.nombre = nombre
        this.sala = sala
    }
}

class Usuarios {
    
    constructor(){
        this.usuarios= []
    }

    crearUsuario(id,nombre,sala){
        
        const usuario = new Usuario(id, nombre, sala)
        
        this.usuarios.push(usuario)     
    }

    eliminarUsuario(id){
        const usuarioPorEliminar = this.usuarios.filter(usuario => usuario.id === id) 
        this.usuarios = this.usuarios.filter(usuario => usuario.id !== id)

        return usuarioPorEliminar[0]

    }
}

module.exports = {
    Usuarios
}