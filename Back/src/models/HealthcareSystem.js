const mongoose = require("mongoose");

const healthcareSystemSchema = new mongoose.Schema({
  idSocialWork: {
    type: Number,
    required: true,
    unique: true, // Garantiza que no se repitan los IDs
  },
  socialWork: {
    type: String,
    required: true,
    minlength: 3,
  },
  active: {
    type: Boolean,
    default: true, // Por defecto, las obras sociales están activas
  },
});

const HealthcareSystem = mongoose.model("HealthcareSystem", healthcareSystemSchema);

module.exports = HealthcareSystem;
