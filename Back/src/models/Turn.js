const mongoose = require("mongoose");
const turnSchema = new mongoose.Schema({
  fecha: {
    type: Date,
    required: true,
  },
  hora: {
    type: String,
    required: true,
  },
  medico: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Relación con el modelo User
    required: true,
  },
  disponible: {
    type: Boolean,
    default: true,
  }
});

const Turn = mongoose.model("Turn", turnSchema)

module.exports = Turn;