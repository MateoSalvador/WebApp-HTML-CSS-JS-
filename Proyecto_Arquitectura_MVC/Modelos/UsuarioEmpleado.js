const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const UsuarioEmpleadoSchema = new mongoose.Schema(
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


UsuarioEmpleadoSchema.methods.validPassword = function (passwd) {
    return bcrypt.compareSync(passwd, this.password);
  };

const UsuarioEmpleado = new mongoose.model('UsuarioEmpleado',UsuarioEmpleadoSchema);
module.exports = UsuarioEmpleado;