const express = require('express')
const router = express.Router();

const CompraController = require('../controllers/CompraController');
router.get('/tablaCompra', CompraController.mostrar);
router.post('/compraMedicamento',CompraController.guardar);
module.exports = router