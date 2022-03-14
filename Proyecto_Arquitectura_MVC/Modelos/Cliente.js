const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema(
    {
        cedula:{
            type: String,
            require:true
        },
        nombre:{
            type: String,
            require:true
        },
        apellido:{
            type: String,
            require:true
        },
        fechaNacimiento:{
            type: String,
            require:true
        },
        correo:{
            type: String,
            require:true
        },
        direccion:{
            type: String,
            require:true
        }



    }
)

const Cliente = new mongoose.model('Cliente',ClienteSchema);
module.exports = Cliente;