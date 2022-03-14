const UsuarioCliente = require('../Modelos/UsuarioCliente');
module.exports.mostrar = (req, res)=>{
    try{ 
     res.render('loginCliente')
    }
    catch{
     res.status(500).json({
         message: 'Error mostrando Login'
     })
    }
 
 }

module.exports.ingresar = async (req, res) =>{
    try{
        console.log(req.body)
        const {nombre, password} = req.body;

        const user = await UsuarioCliente.findOne({nombre:nombre});

        if(password == user.password){
            res.redirect('/');
        } 
        else{
            res.send("Contraseña Invalida");
        }
 
    } catch (error){
        res.status(400).send("Login Inválido");
    }

}

