const cors = require("cors");

const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = [
      "http://localhost:3000", // Tu frontend en local
      "https://c22-20-t-webapp-5y9j.onrender.com", // Tu dominio en producción
      "https://telemed-beta-nine.vercel.app",
    ];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); // Permitir acceso
    } else {
      callback(new Error("Not allowed by CORS")); // Bloquear origen no permitido
    }
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Métodos HTTP permitidos
  credentials: true, // Permitir cookies y encabezados como Authorization
};

module.exports = cors(corsOptions);
