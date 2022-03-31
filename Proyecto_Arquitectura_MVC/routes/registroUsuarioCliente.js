const express = require('express')
const router = express.Router();

const RegistroUsuarioCliente = require('../controllers/RegistroUsuarioClienteController');
router.get('/RegistroUsuarioCliente', RegistroUsuarioCliente.mostrar);
router.post('/registarCliente', RegistroUsuarioCliente.crear);
module.exports = router