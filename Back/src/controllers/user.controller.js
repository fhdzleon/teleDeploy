const bcrypt = require("bcrypt");
const User = require("../models/User.js");

const register = async function (req, res) {
  try {
    const { name, lastName, email, password, gender, phone, role = "patient" } = req.body;

    // Generar hash para la contraseña
    const salt = await bcrypt.genSalt(5);
    const hash = await bcrypt.hash(password, salt);

    // Crear usuario
    const newUser = await User.create({
      name,
      lastName,
      email,
      password: hash,
      phone,
      gender,
      role,
    });

    res.status(201).json({ message: "Usuario registrado con éxito", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al registrar usuario", error });
  }
};

module.exports = { register };


