const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const User = require("../models/User.js");
const Specialty = require('../models/Especialidad.js');
const Shifts = require('../models/Turn.js');

dotenv.config();

const register = async function (req,res){
  const {name,lastName,email,password,gender,phone,role,healthcareSystem}=req.body;
  const salt = await bcrypt.genSalt(5);
  const hash = await bcrypt.hash(password,salt);
  User.create({name,lastName,email,password:hash,gender,phone,role,healthcareSystem})
  .then((result)=>{res.status(201).json({message:"success"});})
  .catch((error)=>{
    if(error.code === 11000){res.status(409).json({error:"this user already exists!"});} 
    else{
      console.error(error);
      res.status(503).json({error:"content not aveliable!"});
    }
  });
};

const login = async function(req,res){
  User.findOne({email:req.body.email})
    .then((result) => {
      if(!result){
        res.status(401).json({error:"email or password incorrect"})
      }
      else{
        if(bcrypt.compareSync(req.body.password,result.password) === true) {
          const token = jwt.sign({id:result._id,role:result.role},process.env.JWT_SECRET,{expiresIn:process.env.EXPIRES});
          const dateLimit = new Date(Date.now()+1000*60*60*24);
          res.cookie("tmck",token,{expires:dateLimit});

          // Define userData
          const userData = {
            name: result.name,
            lastName: result.lastName,
            email: result.email,
            phone: result.phone,
            gender: result.gender,
            healthcareSystem: result.healthcareSystem
          };

          // Cookie with user data
          res.cookie("userData", userData, { expires: dateLimit });

          res.status(200).json({
            message: "authorized",
            userData,
          });
        } 
        else{res.status(401).json({error:"email or password incorrect"})}
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(503).json({error:"content not aveliable!"});
    });
};

const googleLogin = async function (req, res) {
  try {
    const user = req.user; // Usuario recuperado por Passport
    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Generar JWT
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: process.env.EXPIRES,
    });

    // Configurar cookies si es necesario
    const dateLimit = new Date(Date.now() + 1000 * 60 * 60 * 24);
    res.cookie("jwt", token, { expires: dateLimit });

    res.status(200).json({
      message: "Authorized with Google",
      userData: {
        name: user.name,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getSpecialty = function(req,res){
  Specialty.find({},"especialidad")
  .then((result)=>{
    res.json(result)
  })
  .catch((error)=>{
    console.log(error);
    res.status(503).send('Content not aveliable!');
  })
}

const getPatientShifts = function(req,res){
  const cookies = req.headers.cookie.split(';');
  let token = '';
  for(let i=0; i<cookies.length; i++){
    if(cookies[i].startsWith('tmck=')){
      token = cookies[i].replace('tmck=','').replace(' ','');
    }
  }
  const payload = jwt.verify(token,process.env.JWT_SECRET);
  Shifts.find({patient:payload.id})
  .sort({_id:-1})
  .limit(3)
  .then((result)=>{
    if(!result.length){
      res.status(404).send('not found shifts!');
    }
    else{
      res.json(result)
    }
  })
  .catch((error)=>{console.log(error)});
}

module.exports = { register, login, googleLogin, getSpecialty, getPatientShifts };