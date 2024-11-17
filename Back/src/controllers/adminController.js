
const Turno = require('../models/Turn');
const User = require('../models/User');

const AdminController = {
  // Crear turno
  crearTurno: async (req, res) => {
    try {
      const { fecha, hora, medico } = req.body;
  
      // Verificar que el usuario asignado como médico exista y sea un doctor
      const usuarioMedico = await User.findById(medico);
  
      if (!usuarioMedico) {
        return res.status(400).json({ error: "El usuario asignado no existe" });
      }
  
      if (usuarioMedico.role !== 'doctor') {
        return res.status(400).json({ error: "El usuario asignado no es un médico válido" });
      }
  
      // Crear y guardar el turno
      const nuevoTurno = new Turno({ fecha, hora, medico });
      await nuevoTurno.save();
  
      res.status(201).json({ message: "Turno creado con éxito", turno: nuevoTurno });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al crear el turno" });
    }
  },

  // Editar turno
  editarTurno: async (req, res) => {
    try {
      const { turnoId } = req.params;
      const { fecha, hora, medicoId } = req.body;

      const turno = await Turno.findById(turnoId);
      if (!turno) {
        return res.status(404).json({ error: 'Turno no encontrado' });
      }

      // Actualizar la información
      turno.fecha = fecha || turno.fecha;
      turno.hora = hora || turno.hora;
      turno.medico = medicoId || turno.medico;

      await turno.save();

      res.status(200).json({ message: 'Turno actualizado exitosamente', turno });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al actualizar el turno' });
    }
  },

  // Eliminar turno
  eliminarTurno: async (req, res) => {
    try {
      const { turnoId } = req.params;

      const turno = await Turno.findById(turnoId);
      if (!turno) {
        return res.status(404).json({ error: 'Turno no encontrado' });
      }

      await turno.remove();

      res.status(200).json({ message: 'Turno eliminado exitosamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al eliminar el turno' });
    }
  },

  // Ver turnos publicados (para pacientes)
  verTurnos: async (req, res) => {
    try {
      const turnos = await Turno.find({ disponible: true }).populate('medico', 'name lastName');

      if (!turnos.length) {
        return res.status(404).json({ message: 'No hay turnos disponibles' });
      }

      res.status(200).json({ turnos });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener los turnos' });
    }
  }
};

module.exports = AdminController;
