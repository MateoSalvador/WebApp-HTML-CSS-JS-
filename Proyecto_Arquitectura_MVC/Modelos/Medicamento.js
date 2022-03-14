const mongoose = require('mongoose');

const MedicamentoSchema = new mongoose.Schema(
    {
        nombreMedicamento:{
            type: String,
            require:true
        },
        tipo:{
            type: String,
            require:true
        },
        costoUnitario:{
            type: Number,
            require:true
        },
        pvp:{
            type: Number,
            require:true
        },
        FechaVencimiento:{
            type: Date,
            require:true
        },
        proveedor:{
            type: String,
            require: true
        }

    }
)

const Medicamento = new mongoose.model('Medicamento',MedicamentoSchema);
module.exports = Medicamento;