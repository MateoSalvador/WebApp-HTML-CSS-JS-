const UsuarioEmpleado = require('../Modelos/UsuarioEmpleado');

module.exports.mostrar = (req, res)=>{
    try{ 
     res.render('RegistroUsuarioEmpleado')
    }
    catch{
     res.status(500).json({
         message: 'Error mostrando Sign Up'
     })
    }
 
 }
 module.exports.crear = (req,res) =>{
    const {nombre, password, confirmacionpasswd, txtCodigoActivacionfrmRegistroEmpleado} = req.body;
    console.log(req.body);
    console.log(password);
    console.log(confirmacionpasswd);
    console.log(txtCodigoActivacionfrmRegistroEmpleado);
    if(password == confirmacionpasswd && txtCodigoActivacionfrmRegistroEmpleado == 'MedicalApp$Admin$2022'){
    UsuarioEmpleado.create(req.body,(error,usuario)=>{
       res.redirect('/loginEmpleado')
       console.log(req.body);
        }); 
    }
    else if(txtCodigoActivacionfrmRegistroEmpleado != 'MedicalApp$Admin$2022'){
        res.status(500).send('Código de Validación Incorrecto');
    }
    else{
        res.status(500).send('Contraseñas deben Coincidir');
    }
 }