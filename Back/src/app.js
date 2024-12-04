const express = require("express");
const corsConfig = require("./config/cors");
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
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
      store: MongoStore.create({
          mongoUrl: process.env.MONGO_URI, // URL de conexión a tu base de datos MongoDB
          ttl: 14 * 24 * 60 * 60, // Tiempo de vida de las sesiones en segundos (14 días)
      }),
      cookie: {
          secure: process.env.NODE_ENV === "production", // Asegúrate de usar HTTPS en producción
          maxAge: 1000 * 60 * 60 * 24, // Tiempo de vida de la cookie (1 día en este caso)
      },
  })
);

app.use(corsConfig);
app.use(bodyParser.json());
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(router);
app.use(middleware.errorHandler);

module.exports = app;