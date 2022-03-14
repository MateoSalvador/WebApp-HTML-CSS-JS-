const UsuarioEmpleado = require('../Modelos/UsuarioEmpleado');
module.exports.mostrar = (req, res)=>{
   try{ 
    res.render('loginEmpleado')
   }
   catch{
    res.status(500).json({
        message: 'Error mostrando medicamentos'
    })
   }

}
module.exports.ingresar = async (req, res) =>{
    console.log(req.body)
    try{
        const {nombre, password} = req.body;
        console.log(password)
        console.log(nombre)
        const user = await UsuarioEmpleado.findOne({nombre:nombre});

        if(password == user.password){
            res.redirect('/MenuRegistros');
        } 
        else{
            res.send("Contraseña Invalida");
        }
 
    } catch (error){
        res.status(400).send("Login Inválido");
    }
}