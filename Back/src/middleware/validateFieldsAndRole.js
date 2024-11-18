const validateFieldsAndRole = (req, res, next) => {
    const requiredFields = ["name", "lastName", "email", "password", "gender", "phone"];
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
  
    next(); // Continúa con la ejecución si todo es válido
  };
  
  module.exports = validateFieldsAndRole;
  