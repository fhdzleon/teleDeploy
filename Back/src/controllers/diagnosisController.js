const Diagnosis = require("../models/Diagnosis");

const createDiagnosis = async (req, res) => {
  try {
    const { patient, title, body } = req.body;

    // Validar que todos los campos están presentes
    if (!patient || !title || !body) {
      return res.status(400).json({ message: "Todos los campos son obligatorios." });
    }

    // Crear el diagnóstico
    const newDiagnosis = await Diagnosis.create({
      patient,
      title,
      body,
    });

    res.status(201).json({
      message: "Diagnóstico creado con éxito.",
      diagnosis: newDiagnosis,
    });
  } catch (error) {
    console.error("Error al crear diagnóstico:", error);
    res.status(500).json({ message: "Error al crear diagnóstico.", error });
  }
};

module.exports = { createDiagnosis };
