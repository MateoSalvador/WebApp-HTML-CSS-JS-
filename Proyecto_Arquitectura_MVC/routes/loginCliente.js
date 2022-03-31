const express = require('express')
const router = express.Router();

const loginClienteController = require('../controllers/LoginClienteController');
router.get('/loginCliente',loginClienteController.mostrar);
router.post('/loginClientes',loginClienteController.ingresar);
module.exports = router