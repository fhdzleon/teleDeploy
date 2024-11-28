const mongoose = require("mongoose");

const especialidadSchema = new mongoose.Schema(
  {
    especialidad: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 100,
    },
  },
  { collection: "especialidades" } // Forzar el nombre de la colección
);

const Especialidad = mongoose.model("Especialidad", especialidadSchema);

module.exports = Especialidad;
