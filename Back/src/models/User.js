const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: false, // Opcional para usuarios de Google
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: function () {
      return !this.googleId; // Obligatorio solo si no es usuario de Google
    },
  },
  googleId: {
    type: String, // Identificador único para usuarios de Google
    required: false,
  },
  gender: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    default: "user",
  },
  healthcareSystem: {
    type: String,
    required: false,
  },
  idAfiliado: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("User", userSchema);
