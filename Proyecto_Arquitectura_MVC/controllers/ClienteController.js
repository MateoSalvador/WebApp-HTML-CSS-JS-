const Cliente = require('../Modelos/Cliente');

module.exports.mostrar = (req, res)=>{
            Cliente.find({},(error, clientes)=>{
            if(error){
                return res.status(500).json({
                    message: 'Error mostrando Clientes'
                })
            }
            return res.render('clientetabla',{clientes: clientes})
        });
}

module.exports.editar = (req, res)=>{
    console.log(req.body)
    const id = req.body.id_editar;
    const cedula = req.body.cedula_editar;
    const nombre = req.body.nombre_editar;
    const apellido = req.body.apellido_editar;
    const fechaNacimiento = req.body.fechaNacimiento_editar;
    const correo = req.body.correo_editar;
    const direccion = req.body.direccion_editar;
    Cliente.findByIdAndUpdate(id, {cedula, nombre, apellido, fechaNacimiento, correo, direccion}, (error, clientes)=>{ 
    if(error){
        return res.status(500).json({
            message: 'Error actualizando Clientes'
        })
    }
     res.redirect('/clientes')
});

}

module.exports.eliminar = (req, res)=>{
    const id = req.params.id;
    Cliente.findByIdAndRemove(id, (error, clientes)=>{ 
    if(error){
        return res.status(500).json({
            message: 'Error eliminando Clientes'
        })
    }
     res.redirect('/clientes')
});

}