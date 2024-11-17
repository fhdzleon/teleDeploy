const express = require("express");
const cors = require("cors");
const middleware = require("./middleware/middleware");
const app = express();
const { connectToDatabase } = require("./db/database");
const router = require("./routes/routes");
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/adminRoutes');

connectToDatabase();

app.use(express.json());
app.use(cors());
app.use(router);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);
app.use(bodyParser.json());
app.use('/api/admin', adminRoutes);

module.exports = app;
