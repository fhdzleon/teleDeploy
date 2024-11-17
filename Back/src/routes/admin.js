// src/routes/adminRoutes.js

const express = require('express');
const AdminController = require('../controllers/adminController');

const router = express.Router();

// Crear turno
router.post('/turnos', AdminController.crearTurno);

// Editar turno
router.put('/turnos/:turnoId', AdminController.editarTurno);

// Eliminar turno
router.delete('/turnos/:turnoId', AdminController.eliminarTurno);

// Ver turnos publicados (para pacientes)
router.get('/turnos', AdminController.verTurnos);

module.exports = router;
