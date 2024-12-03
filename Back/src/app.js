const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");
const middleware = require("./middleware/middleware");
const { connectToDatabase } = require("./db/database");
const router = require("./routes/routes");

require("./config/passport.js");

const app = express();

connectToDatabase();

// Configuración de sesiones
app.use(
    session({
      secret: process.env.SESSION_SECRET || "my_secret", // Usa una clave secreta desde .env
      resave: false, // No guardar la sesión si no se ha modificado
      saveUninitialized: false, // No guardar sesiones vacías
      cookie: {
        secure: process.env.NODE_ENV === "production", // Asegúrate de usar HTTPS en producción
        maxAge: 1000 * 60 * 60 * 24, // Tiempo de vida de la cookie (1 día en este caso)
      },
    })
  );

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(router);
app.use(middleware.errorHandler);

module.exports = app;