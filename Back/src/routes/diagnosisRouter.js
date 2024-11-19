const express = require("express");
const { createDiagnosis } = require("../controllers/diagnosisController");
const roleAuthorization = require("../middleware/roleAuthorization.js");

const router = express.Router();

// Ruta para crear diagnósticos
router.post("/create", roleAuthorization(["doctor"]), createDiagnosis);

module.exports = router;
