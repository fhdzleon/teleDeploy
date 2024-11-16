const express = require("express");
const cors = require("cors");
const middleware = require("./middleware/middleware");
const app = express();
const { connectToDatabase } = require("./db/database");

connectToDatabase();

app.use(express.json());
app.use(cors());


app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
