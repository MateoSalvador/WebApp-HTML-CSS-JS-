const express = require('express')
const router = express.Router();

const MenuController = require('../controllers/MenuController');
router.get('/MenuRegistros',MenuController.mostrar);
module.exports = router