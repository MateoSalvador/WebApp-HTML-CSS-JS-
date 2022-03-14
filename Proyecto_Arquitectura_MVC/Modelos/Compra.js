const mongoose = require('mongoose');

const CompraSchema = new mongoose.Schema(
    {
        cedulaCliente:{
            type: String,
            require:true
        },
        fechaCompra:{
            type: Date,
            require:true
        },
        total:{
            type: Number,
            require:true
        }
    }
)

const Compra = new mongoose.model('Compra',CompraSchema);
module.exports = Compra;