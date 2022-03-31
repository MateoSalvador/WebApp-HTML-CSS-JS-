const express = require('express')
const router = express.Router();

const Medicamento = require('../controllers/RegistroMedicamentosController');
router.get('/RegistroMedicamento',Medicamento.mostrar);
router.post('/registerMedicine',Medicamento.guardar);
module.exports = router