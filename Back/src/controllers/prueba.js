const prueba = require("express").Router();

prueba.get("/", (req, res) => {
  res.send("<h1>hello</h1>"); 
});

module.exports = prueba;