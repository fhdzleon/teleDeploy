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
app.use(middleware.errorHandler); 

module.exports = app;
