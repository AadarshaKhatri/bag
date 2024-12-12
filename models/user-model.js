const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
  username:{
    type:String,
    required:true,
    trim:true,
    minLength:[1,"Character must be greater than 1"],
    maxLength:[16,"Characters must be less tha 16"],
  },
  email:{
    type:String,
    required:true,
    unique:true,
    trim:true,
    match: [/.+@.+\..+/, 'Please enter a valid email address'],
  },
  password:{
    type:String,
    unique:String,
    trim:String,
    require:true,
  },
  cart:{
    type:Array,
    default:[],
  },
  isAdmin:{
    type:Boolean,

  },
  orders:{
    type:Array,
    default:[],
  },
  contact:{
    type:Number,
  },
  picture:{
    type:String,
  }
})

const User = mongoose.model("user",userSchema);

module.exports = User;