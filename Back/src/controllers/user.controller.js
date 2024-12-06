const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const User = require("../models/User.js");
const Specialty = require("../models/Especialidad.js");
const Shifts = require("../models/Turn.js");
const mongoose = require("mongoose");

dotenv.config();

const register = async function (req, res) {
  const {
    name,
    lastName,
    email,
    password,
    gender,
    age,
    phone,
    role,
    idAfiliado,
    healthcareSystem,
  } = req.body;
  const salt = await bcrypt.genSalt(5);
  const hash = await bcrypt.hash(password, salt);
  User.create({
    name,
    lastName,
    email,
    password: hash,
    gender,
    age,
    phone,
    role,
    idAfiliado,
    healthcareSystem,
  })
    .then((result) => {
      res.status(201).json({ message: "success" });
    })
    .catch((error) => {
      if (error.code === 11000) {
        res.status(409).json({ error: "this user already exists!" });
      } else {
        console.error(error);
        res.status(503).json({ error: "content not aveliable!" });
      }
    });
};

const login = async function (req, res) {
  try {
    // Buscamos el usuario y populamos el campo healthcareSystem
    const result = await User.findOne({ email: req.body.email }).populate(
      "healthcareSystem"
    );

    if (!result) {
      return res.status(401).json({ error: "email or password incorrect!" });
    }

    if (bcrypt.compareSync(req.body.password, result.password)) {
      const userData = {
        id: result.id,
        name: result.name,
        lastName: result.lastName,
        email: result.email,
        phone: result.phone,
        gender: result.gender,
        age: result.age,
        idAfiliado: result.idAfiliado,
        healthcareSystem: result.healthcareSystem,
        /*   ? result.healthcareSystem.socialWork
          : null, */
      };
      return res.json({ userData });
    } else {
      return res.status(401).json({ error: "email or password incorrect!" });
    }
  } catch (error) {
    console.error(error);
    res.status(503).json({ error: "content not available!" });
  }
};

const googleLogin = async function (req, res) {
  try {
    const user = req.user; // Usuario recuperado por Passport
    if (!user) {
      return res.status(401).redirect("/login"); // Redirigir al login si no hay usuario
    }

    // Generar JWT
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.EXPIRES }
    );

    // Configurar cookies si es necesario
    const dateLimit = new Date(Date.now() + 1000 * 60 * 60 * 24);
    res.cookie("jwt", token, { expires: dateLimit, httpOnly: true });

    // Redirigir al frontend
    const frontendURL = process.env.FRONTEND_URL || "http://localhost:3000/in";
    const redirectURL = `${frontendURL}/in?name=${encodeURIComponent(
      user.name
    )}&email=${encodeURIComponent(user.email)}`;

    res.redirect(redirectURL); // Redirigir al frontend con los datos del usuario
  } catch (error) {
    console.error(error);
    res.status(500).redirect("/error"); // Redirigir a una página de error en caso de fallo
  }
};

const getSpecialty = function (req, res) {
  Specialty.find({}, "especialidad")
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(503).send("Content not aveliable!");
    });
};

const getPatientShifts = function (req, res) {
  const id = req.params.id.replace(":", ""); // Elimina ':' de los parámetros si está presente

  // Validar si el ID es un ObjectId válido
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "ID inválido." });
  }

  Shifts.find({ patient: id })
    .sort({ _id: -1 })
    .limit(3)
    .then((result) => {
      if (result.length === 0) {
        res.json([]); // Enviar array vacío si no hay resultados
      } else {
        res.json(result); // Enviar resultados si existen
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(503).json({ error: "Error al obtener turnos." });
    });
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    console.log(req.body);
    console.log(req.params);
    // Evitar la actualización del email
    if (updates.email) {
      return res.status(400).json({ error: "No se puede actualizar el email" });
    }

    // Buscar y actualizar el usuario
    const updatedUser = await User.findByIdAndUpdate(id, updates, {
      new: true, // Retorna el documento actualizado
      runValidators: false, // Aplica las validaciones definidas en el esquema
    });

    if (!updatedUser) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.json(updatedUser);
  } catch (error) {
    /*  console.error("Error al actualizar usuario:", error); */
    console.error("Error al actualizar usuario:");
    res.status(500).json({ error: "Error al actualizar el usuario" });
  }
};

module.exports = {
  register,
  login,
  googleLogin,
  getSpecialty,
  getPatientShifts,
  updateUser,
};
