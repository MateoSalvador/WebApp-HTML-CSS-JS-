module.exports.mostrar = (req, res)=>{
    try{ 
     res.render('menu')
    }
    catch{
     res.status(500).json({
         message: 'Error mostrando Login'
     })
    }
 
 }