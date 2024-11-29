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
    ref: "Medico", // Relación con el modelo User
    required: true,
  },
  disponible: {
    type: Boolean,
    default: true,
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Relación con el modelo User
    default: null,
  },
});

module.exports = mongoose.model("Turn", turnSchema);
