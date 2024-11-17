const mongoose = require('mongoose');

const turnoSchema = new mongoose.Schema({
  fecha: {
    type: Date,
    required: true
  },
  hora: {
    type: String,
    required: true
  },
  medico: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Medico',
    required: true
  },
  disponible: {
    type: Boolean,
    default: true  // Los turnos se pueden marcar como disponibles o no
  }
});

const Turno = mongoose.model('Turno', turnoSchema);

module.exports = Turno;