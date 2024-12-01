const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const User = require("../models/User.js");
const Specialty = require('../models/Especialidad.js');

dotenv.config();

const register = async function (req,res){
  const {name,lastName,email,password,gender,phone,role,healthcareSystem}=req.body;
  console.log(name,lastName,email,password,gender,phone,role,healthcareSystem);
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
      if(!result){res.status(401).json({error:"email or password incorrect"})}
      else{
        if(bcrypt.compareSync(req.body.password,result.password) === true) {
          const token = jwt.sign({id:result._id,role:result.role},process.env.JWT_SECRET,{expiresIn:process.env.EXPIRES});
          const dateLimit = new Date(Date.now()+1000*60*60*24);
          res.cookie("jwt",token,{expires:dateLimit});

          // Define userData
          const userData = {
            name: result.name,
            lastName: result.lastName,
            email: result.email,
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

module.exports = { register, login, getSpecialty };