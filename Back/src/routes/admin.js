
const express = require('express');
const AdminController = require('../controllers/adminController');

const router = express.Router();

router.post('/turnos', AdminController.crearTurno);

router.put('/turnos/:turnoId', AdminController.editarTurno);

router.delete('/turnos/:turnoId', AdminController.eliminarTurno);

// Ver turnos publicados (para pacientes)
router.get('/turnos', AdminController.verTurnos);

module.exports = router;
