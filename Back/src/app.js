const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const middleware = require("./middleware/middleware");
const { connectToDatabase } = require("./db/database");
const router = require("./routes/routes");
const adminRoutes = require("./routes/admin");
const turnRoutes = require("./routes/turnRouter");

const app = express();

connectToDatabase();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(router); 

// EN ESTE ARCHIVO SOLO CONFIGURACIOND DE LA APLICACION DE EXPRESS ---------------->



// LA DEFINICION DE RUTAS Y SUS FUNCIONES VAN EN EL ARCHIVO ROUTES.JS

app.use("/api/admin", adminRoutes); 
app.use("/api", router); // no hace falta definir el endpoint el objeto router() de express ya esta definido en el archivo routes.js
app.use("/api/turns", turnRoutes)
app.use(middleware.errorHandler); 

module.exports = app;
