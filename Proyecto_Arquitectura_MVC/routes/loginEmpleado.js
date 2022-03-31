const express = require('express')
const router = express.Router();

const loginEmpleadoController = require('../controllers/LoginEmpleadoController');
router.get('/loginEmpleado',loginEmpleadoController.mostrar);
router.post('/loginEmpleados',loginEmpleadoController.ingresar);
module.exports = router