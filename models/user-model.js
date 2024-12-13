const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
  username:{
    type:String,
   
    trim:true,
    minLength:[1,"Character must be greater than 1"],
    maxLength:[16,"Characters must be less tha 16"],
  },
  email:{
    type:String,
    unique:true,
    trim:true,
    match: [/.+@.+\..+/, 'Please enter a valid email address'],
  },
  password:{
    type:String,
    trim:true,
    
  },
  cart:{
    type:Array,
    default:[],
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