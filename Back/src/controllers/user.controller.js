const bcrypt = require("bcrypt");
const User = require("../models/User.js");

const register = async function (req, res) {
  try {
    const { name, lastName, email, password, gender, phone, role = "patient" } = req.body;

    // Validar que todos los campos obligatorios estén presentes
    if (!name || !lastName || !email || !password || !gender || !phone) {
      return res.status(400).json({ message: "Todos los campos son obligatorios." });
    }

    // Validar que el rol sea uno de los permitidos
    const allowedRoles = ["admin", "doctor", "patient"];
    if (!allowedRoles.includes(role)) {
      return res.status(400).json({ message: `El rol debe ser uno de: ${allowedRoles.join(", ")}` });
    }

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
      role, // Se usará el rol enviado, o "patient" por defecto
    });

    res.status(201).json({ message: "Usuario registrado con éxito", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al registrar usuario", error });
  }
};

module.exports = { register };
