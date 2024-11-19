const express = require("express");
const { register } = require("../controllers/user.controller");
const loginRouter = require("../controllers/login.controller")
const { checkRegister, checkLogin } = require("../middleware/middleware.js");

const router = express.Router();

router.use('/register/api',checkRegister);
router.use('/login/api',checkLogin);

router.post('/register/api',register);
router.use('/login/api',loginRouter);

module.exports = router;