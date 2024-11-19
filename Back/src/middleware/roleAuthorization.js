const jwt = require("jsonwebtoken");
const User = require("../models/User");

const roleAuthorization = (allowedRoles) => {
  return async (req, res, next) => {
    const authHeader = req.headers.authorization;

    // Verificar si el encabezado Authorization existe y está en el formato adecuado
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Authorization token missing or invalid" });
    }

    const token = authHeader.split(" ")[1];

    try {
      // Verificar el token
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

      // Buscar al usuario por ID decodificado
      const user = await User.findById(decodedToken.id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      // Verificar si el usuario tiene un rol permitido
      if (!allowedRoles.includes(user.role)) {
        return res.status(403).json({ error: "Access denied: insufficient permissions" });
      }

      req.user = user; // Adjuntar usuario al request
      next(); // Continuar al siguiente middleware o controlador
    } catch (error) {
      return res.status(401).json({ error: "Invalid or expired token" });
    }
  };
};

module.exports = roleAuthorization;
