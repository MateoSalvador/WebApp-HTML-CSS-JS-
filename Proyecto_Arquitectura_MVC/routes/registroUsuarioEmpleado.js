const express = require('express')
const router = express.Router();

const RegistroUsuarioEmpleado = require('../controllers/RegistroUsuarioEmpleadoController');
router.get('/RegistroUsuarioEmpleado',RegistroUsuarioEmpleado.mostrar);
router.post('/registarEmpleado',RegistroUsuarioEmpleado.crear);
module.exports = router