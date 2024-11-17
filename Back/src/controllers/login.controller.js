const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const loginRouter = require("express").Router();
const User = require("../models/User");

loginRouter.post("/", async (request, response, next) => {
  try {
    const { email, password } = request.body;

    const user = await User.findOne({ email });
    if (!user) {
      return response.status(401).json({ error: "Invalid email or password" });
    }

    const passwordCorrect = await bcrypt.compare(password, user.password);
    if (!passwordCorrect) {
      return response.status(401).json({ error: "Invalid email or password" });
    }

    const userForToken = {
      id: user._id,
    };

    const token = jwt.sign(userForToken, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    response.status(200).json({
      token,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = loginRouter;
