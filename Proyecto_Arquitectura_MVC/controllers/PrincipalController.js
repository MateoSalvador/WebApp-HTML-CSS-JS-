module.exports.mostrar = (req, res)=>{
    try{ 
        res.render('principal')
       }
       catch{
        res.status(500).json({
            message: 'Error mostrando Login'
        })
       }

}