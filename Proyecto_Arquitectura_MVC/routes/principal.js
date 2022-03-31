const express = require('express')
const router = express.Router();

const principalController = require('../controllers/PrincipalController');
router.get('/',principalController.mostrar);
module.exports = router