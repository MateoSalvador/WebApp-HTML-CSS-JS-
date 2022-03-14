const mongoose = require('mongoose');

const ItemCompraSchema = new mongoose.Schema(
    {
        idCompra:{
            type: String,
            require:true
        },
        idMedicamento:{
            type: String,
            require:true
        },
        Cantidad:{
            type: Number,
            require:true
        }
    }
)

const ItemCompra = new mongoose.model('Compra',ItemCompraSchema);
module.exports = ItemCompra;