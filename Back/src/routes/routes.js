const express = require("express");
const { register } = require("../controllers/user.controller");
const loginRouter = require("../controllers/login.controller")
const validateFieldsAndRole = require("../middleware/validateFieldsAndRole.js");

const router = express.Router();

router.post('/register/api', validateFieldsAndRole, register);
router.use('/login/api',loginRouter);

module.exports = router;