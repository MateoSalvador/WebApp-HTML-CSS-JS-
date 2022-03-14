const express = require('express')
const router = express.Router();

const clienteController = require('../controllers/ClienteController');
router.get('/clientes', clienteController.mostrar);
router.post('/editarcliente', clienteController.editar);
router.get('/borrarcliente/:id',clienteController.eliminar);
module.exports = router