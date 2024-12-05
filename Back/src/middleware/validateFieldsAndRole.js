const HealthcareSystem = require("../models/HealthcareSystem");

const validateFieldsAndRole = async (req, res, next) => {
  const requiredFields = ["name", "lastName", "email", "password", "gender", "age", "phone", "idAfiliado", "healthcareSystem"];
  const allowedRoles = ["admin", "doctor", "patient"];

  // Verificar campos obligatorios
  for (const field of requiredFields) {
    if (!req.body[field]) {
      return res.status(400).json({ message: `El campo ${field} es obligatorio.` });
    }
  }

  // Validar el rol
  const { role = "patient" } = req.body; // Si no se envía el rol, usamos "patient" como predeterminado
  if (!allowedRoles.includes(role)) {
    return res.status(400).json({ message: `El rol debe ser uno de: ${allowedRoles.join(", ")}` });
  }

  // Validar que el healthcareSystem sea un ID válido y exista en la base de datos
  try {
    const healthcareSystemExists = await HealthcareSystem.findById(req.body.healthcareSystem);
    if (!healthcareSystemExists) {
      return res.status(400).json({ message: "El healthcareSystem proporcionado no es válido." });
    }
  } catch (error) {
    return res.status(400).json({ message: "El healthcareSystem proporcionado no es válido." });
  }

  next(); // Continúa con la ejecución si todo es válido
};

module.exports = validateFieldsAndRole;
