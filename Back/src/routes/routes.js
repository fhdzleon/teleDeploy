const express = require("express");
const { register } = require("../controllers/user.controller");
const loginRouter = require("../controllers/login.controller")
<<<<<<< HEAD
const { checkRegister, checkLogin } = require("../middleware/middleware.js");

const router = express.Router();

router.use('/register/api',checkRegister);
router.use('/login/api',checkLogin);

router.post('/register/api',register);
router.use('/login/api',loginRouter);
=======
const validateFieldsAndRole = require("../middleware/validateFieldsAndRole.js");
const roleAuthorization = require("../middleware/roleAuthorization.js");

const router = express.Router();

router.post('/register/api', validateFieldsAndRole, register);
router.use('/login/api', roleAuthorization(["admin"]),loginRouter);
>>>>>>> dmitridev

module.exports = router;