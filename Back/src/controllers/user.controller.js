const bcrypt = require("bcrypt");
const User = require("../models/User.js");

const register = async function (req, res) {
    const { name, lastName, email, password, gender, phone, role} = req.body;
    const salt = await bcrypt.genSalt(5);
    const hash = await bcrypt.hash(password, salt);
    User.create({name:name,lastName:lastName,email:email,password:hash,gender:gender,phone:phone,role:role})
    .then((result)=>{
      res.status(201).json({message:'success'});
    })
    .catch((error)=>{
      if(error.errorResponse.code === 11000){
        res.status(409).json({error:'this user already exist!'});
      }
    });
};

module.exports = { register };


