const express = require("express");
const { register } = require("../controllers/user.controller");
const loginRouter = require("../controllers/login.controller")
const validateFieldsAndRole = require("../middleware/validateFieldsAndRole.js");
const { checkRegister } = require("../middleware/middleware.js");

const router = express.Router();

router.use('/register/api',checkRegister);
router.post('/register/api',register);
router.use('/login/api',loginRouter);

module.exports = router;