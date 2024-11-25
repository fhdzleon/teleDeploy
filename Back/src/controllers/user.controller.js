const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const User = require("../models/User.js");

dotenv.config();

const register = async function (req, res) {
  const { name, lastName, email, password, gender, phone, role } = req.body;
  const salt = await bcrypt.genSalt(5);
  const hash = await bcrypt.hash(password, salt);
  User.create({
    name: name,
    lastName: lastName,
    email: email,
    password: hash,
    gender: gender,
    phone: phone,
    role: role,
  })
    .then(() => {
      res.status(201).json({ message: "success" });
    })
    .catch((error) => {
      if (error.errorResponse?.code === 11000) {
        res.status(409).json({ error: "this user already exist!" });
      } else {
        res.status(500).json({ error: "internal server error" });
      }
    });
};

const login = async function (req, res) {
  User.findOne({ email: req.body.email })
    .then((result) => {
      if (!result) {
        res.status(401).json({ error: "email or password incorrect" });
      } else {
        if (bcrypt.compareSync(req.body.password, result.password)) {
          const token = jwt.sign(
            { id: result._id, role: result.role },
            process.env.JWT_SECRET,
            { expiresIn: process.env.EXPIRES }
          );

          const dateLimit = new Date(Date.now() + 1000 * 60 * 60 * 24);

          // Cookie with JWT
          res.cookie("jwt", token, { expires: dateLimit });

          // Cookie with user data
          res.cookie("userData", {
            name: result.name,
            lastName: result.lastName,
            email: result.email,
          }, { expires: dateLimit });

          res.send("authorized");
        } else {
          res.status(401).json({ error: "email or password incorrect" });
        }
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: "internal server error" });
    });
};

module.exports = { register, login };
