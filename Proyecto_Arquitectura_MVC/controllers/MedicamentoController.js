const Medicamento = require('../Modelos/Medicamento');

module.exports.mostrar = (req, res)=>{
        Medicamento.find({},(error, medicamentos)=>{
            if(error){
                return res.status(500).json({
                    message: 'Error mostrando medicamentos'
                })
            }
            //console.log(medicamentos)
            return res.render('medicamentostabla',{medicamentos: medicamentos})
        });

}

module.exports.editar = (req, res)=>{
    console.log(req.body)
    const id = req.body.id_editar;
    const nombreMedicamento = req.body.nombre_editar;
    const tipo = req.body.tipo_editar;
    const costoUnitario = req.body.costounitario_editar;
    const pvp = req.body.pvp_editar;
    const FechaVencimiento = req.body.fecha_editar;
    const proveedor = req.body.proveedor_editar;
    Medicamento.findByIdAndUpdate(id, {nombreMedicamento, tipo, costoUnitario, pvp, FechaVencimiento, proveedor}, (error, medicamentos)=>{ 
    if(error){
        return res.status(500).json({
            message: 'Error actualizando medicamentos'
        })
    }
    //console.log(medicamentos)
     res.redirect('/medicamentos')
});

}

module.exports.eliminar = (req, res)=>{
    const id = req.params.id;
    Medicamento.findByIdAndRemove(id, (error, medicamentos)=>{ 
    if(error){
        return res.status(500).json({
            message: 'Error eliminando medicamentos'
        })
    }
    //console.log(medicamentos)
     res.redirect('/medicamentos')
});

}