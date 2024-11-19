const express = require("express");
const { register } = require("../controllers/user.controller");
const loginRouter = require("../controllers/login.controller")
const validateFieldsAndRole = require("../middleware/validateFieldsAndRole.js");
const roleAuthorization = require("../middleware/roleAuthorization.js");

const router = express.Router();

// router.use('/register/api',checkRegister);
// router.use('/login/api',checkLogin);

router.post('/register/api', validateFieldsAndRole, register);
router.use('/login/api', roleAuthorization(["patient"]), loginRouter);

module.exports = router;