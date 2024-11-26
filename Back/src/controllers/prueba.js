const prueba = require("express").Router();

//ruta para probar en render
prueba.get("/", (req, res) => {
  res.send("<h1>hello</h1>"); 
});

module.exports = prueba;