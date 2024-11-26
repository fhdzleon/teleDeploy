const express = require("express");
const { register, login } = require("../controllers/user.controller");
const { checkRegister, checkLogin } = require("../middleware/middleware");
const { getDiagnosis, createDiagnosis } = require("../controllers/doctor.controller");
const { addHealthcareSystem } = require("../controllers/healthcareSystemController");

const router = express.Router();

router.use('/register/api',checkRegister);
router.use('/login/api',checkLogin);

router.post('/register/api',register);
router.post('/login/api',login);
router.get('/diagnosis/:id',getDiagnosis);
router.post("/create",createDiagnosis);
router.post("/add", addHealthcareSystem);

module.exports = router;