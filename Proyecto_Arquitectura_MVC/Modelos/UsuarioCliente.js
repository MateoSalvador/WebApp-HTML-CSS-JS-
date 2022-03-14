const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UsuarioClienteSchema = new mongoose.Schema(
    {
        nombre:{
            type: String,
            require:true
        },
        password:{
            type: String,
            require:true
        },

    }
)


const UsuarioCliente = new mongoose.model('UsuarioCliente',UsuarioClienteSchema);
module.exports = UsuarioCliente;
