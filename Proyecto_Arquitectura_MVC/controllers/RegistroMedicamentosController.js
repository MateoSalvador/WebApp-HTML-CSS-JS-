const Medicamento = require('../Modelos/Medicamento');

module.exports.mostrar = (req, res)=>{
    try{ 
     res.render('RegistroDeMedicamentos')
    }
    catch{
     res.status(500).json({
         message: 'Error mostrando Login'
     })
    }
 
 }

module.exports.guardar =(req, res) =>{
    Medicamento.create(req.body,(error,usuario)=>{
        res.redirect('/RegistroMedicamento');
        console.log(req.body);
     });
}