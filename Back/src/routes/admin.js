
const express = require('express');
const AdminController = require('../controllers/adminController');
const roleAuthorization = require("../middleware/roleAuthorization.js");

const router = express.Router();

router.post('/turnos', roleAuthorization(["admin"]), AdminController.crearTurno);

router.put('/turnos/:turnoId', roleAuthorization(["admin"]), AdminController.editarTurno);

router.delete('/turnos/:turnoId', roleAuthorization(["admin"]), AdminController.eliminarTurno);

// Ver turnos publicados (para pacientes)
router.get('/turnos', AdminController.verTurnos);

module.exports = router;
