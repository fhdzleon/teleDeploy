const bcrypt = require("bcrypt");
const User = require("../models/User.js");

const register = async function(req,res){
  const name = req.body.name;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const password = req.body.password;
  const gender = req.body.gender;
  const phone = req.body.phone;
  const salt = await bcrypt.genSalt(5);
  const hash = await bcrypt.hash(password,salt);
  User.create({name:name,lastName:lastname,email:email,password:hash,phone:phone,gender:gender,role:"patient"})
  .then((result)=>{
    res.send('success');
  })
  .catch((error)=>{
    console.log(error);
  });
}

module.exports = {register};