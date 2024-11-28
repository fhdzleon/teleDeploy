const express = require("express");
const { register, login, getSpecialty } = require("../controllers/user.controller");
const { checkRegister, checkLogin } = require("../middleware/middleware");
const { getDiagnosis, createDiagnosis } = require("../controllers/doctor.controller");
const { addHealthcareSystem } = require("../controllers/healthcareSystemController");
const { reserveTurn } = require("../controllers/turnController.js");
const AdminController = require('../controllers/adminController');

const router = express.Router();

router.use('/register/api',checkRegister);
router.use('/login/api',checkLogin);

router.post('/register/api',register);
router.post('/login/api',login);


router.put("/reserve-turn", reserveTurn);
router.get('/turnos', AdminController.verTurnos);

router.post("/add", addHealthcareSystem);
router.get('/diagnosis/:id',getDiagnosis);
router.post("/create",createDiagnosis);
router.post("/add", addHealthcareSystem);
router.put("/reserve-turn", reserveTurn);
router.get("/appointment",getSpecialty);
// router.get("/appointment/doctors/:specialty")

module.exports = router;