/* const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const loginRouter = require("express").Router();
const User = require("../models/User");

loginRouter.post("/", async (request, response, next) => {
  const { email, password } = request.body;

  const user = await User.findOne({ email });
  if (!user) {
    return response
      .status(401)
      .json({ error: "email o contraseña incorrecta" });
  }

  const passwordCorrect = await bcrypt.compare(password, user.password);
  if (!passwordCorrect) {
    return response.status(401).json({ error: "contraseña incorrecta" });
  }

  const userForToken = {

  };

  const token = jwt.sign(())
});
 */