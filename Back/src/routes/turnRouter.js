const express = require("express");
const { reserveTurn } = require("../controllers/turnController.js");
const roleAuthorization = require("../middleware/roleAuthorization.js");

const router = express.Router();

// Ruta para reservar un turno
router.put("/reserve-turn", roleAuthorization(["patient"]), reserveTurn);

module.exports = router;
