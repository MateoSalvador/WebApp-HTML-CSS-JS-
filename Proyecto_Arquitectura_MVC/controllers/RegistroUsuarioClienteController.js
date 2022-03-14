const UsuarioCliente = require('../Modelos/UsuarioCliente');
module.exports.mostrar = (req, res)=>{
    try{ 
     res.render('RegistroUsuarioCliente')
    }
    catch{
     res.status(500).json({
         message: 'Error mostrando Sign Up'
     })
    }
 
 }
 
 module.exports.crear = (req,res) =>{
    const {nombre, password, confirmacionpasswd} = req.body;
    console.log(req.body);
    if(password == confirmacionpasswd){
        UsuarioCliente.create(req.body,(error,usuario)=>{
            res.redirect('/loginCliente')
            console.log(req.body);
         })
    }
    else{
        res.status(500).send('Contraseñas deben Coincidir');
    }
    
 }