const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: true,
  },
  lastName: {
    type: String,
    minlength: 3,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    minlength: 3,
    required: true,
    select: false,
  },
  googleId: {
    type: String, 
    unique: true, 
    sparse: true 
  },
  phone: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "doctor", "patient"],
    default: "patient",
    required: true,
  },
  healthcareSystem: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "HealthcareSystem", // Referencia al modelo HealthcareSystem
    default: null, // Inicialmente vacío
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
