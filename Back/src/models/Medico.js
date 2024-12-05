const mongoose = require("mongoose");

const medicoSchema = new mongoose.Schema({
    nombreCompleto: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
    especialidad: {
        type: String,
        required: true,
        enum: ["cardiologia", "dermatologia", "nutricion", "psicologia"] // Valida especialidades válidas
    },
    imagenPerfilUrl: {
        type: String, 
        required: false, 
      },
}); 
const Medico = mongoose.model("Medico", medicoSchema);

module.exports = Medico;
