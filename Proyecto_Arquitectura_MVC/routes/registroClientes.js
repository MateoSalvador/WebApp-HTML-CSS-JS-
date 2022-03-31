const express = require('express')
const router = express.Router();

const Cliente = require('../controllers/RegistroClientesController');
router.get('/RegistroCliente',Cliente.mostrar);
router.post('/registerClient',Cliente.guardar);
module.exports = router