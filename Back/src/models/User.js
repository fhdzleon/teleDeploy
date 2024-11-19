const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        minlength: 3,
        required: true,
      },
    
      lastName: {
        type: String,
        unique: true,
        minlength: 3,
        required: true,
      },

      email:{
        type: String,
        unique: true,
      },

      password:{
        type: String,
        minlength: 3,
        required: true,
      }
})