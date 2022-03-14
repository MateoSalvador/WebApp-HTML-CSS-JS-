const mongoose = require('mongoose');
const Cliente = require('../Modelos/Cliente');
const MedicamentoControlador = require('./MedicamentoController');

module.exports.visualizar = (req, res)=>{
    try{
    const {cedula} = req.body.cedulaCliente;
    const cliente = await Cliente.findOne({cedula:cedula});
    console.log(cliente);
    }catch (error){
        res.status(400).send("Cliente no Encontrado");  
        }
    }






  