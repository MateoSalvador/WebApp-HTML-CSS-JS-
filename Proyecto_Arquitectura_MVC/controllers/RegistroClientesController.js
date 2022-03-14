const Cliente = require('../Modelos/Cliente');

module.exports.mostrar = (req, res)=>{
    try{ 
     res.render('RegistroDeCliente')
    }
    catch{
     res.status(500).json({
         message: 'Error mostrando Formulario'
     })
    }
 
 }

module.exports.guardar =(req, res) =>{
    Cliente.create(req.body,(error,usuario)=>{
        res.redirect('/RegistroCliente');
        console.log(req.body);
     });
}