const express = require("express");
const cors = require("cors")
const app = express()
const {connectToDatabase} = require("./db/database")

connectToDatabase()

app.use(express.json());
app.use(cors())

module.exports = app;