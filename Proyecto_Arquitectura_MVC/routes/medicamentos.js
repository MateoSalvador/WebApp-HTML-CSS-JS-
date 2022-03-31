const express = require('express')
const router = express.Router();

const medicamentoController = require('../controllers/MedicamentoController');
router.get('/medicamentos', medicamentoController.mostrar);
router.post('/editar', medicamentoController.editar);
router.get('/borrar/:id',medicamentoController.eliminar);
//router.get('/tablaCompra',medicamentoController.mostrarSelect);
module.exports = router