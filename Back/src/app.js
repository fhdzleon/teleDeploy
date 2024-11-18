const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const middleware = require("./middleware/middleware");
const { connectToDatabase } = require("./db/database");
const router = require("./routes/routes");
<<<<<<< HEAD
const prueba = require("./controllers/prueba")
=======
const adminRoutes = require("./routes/admin");

const app = express();
>>>>>>> dmitridev

connectToDatabase();

app.use(cors());
<<<<<<< HEAD
app.use(router);
app.use("/prueba", prueba)
=======
app.use(bodyParser.json());
app.use(express.json());
>>>>>>> dmitridev

app.use("/api", router); 
app.use("/api/admin", adminRoutes); 


app.use(middleware.unknownEndpoint); 
app.use(middleware.errorHandler); 

module.exports = app;
