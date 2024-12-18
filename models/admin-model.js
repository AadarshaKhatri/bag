const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  email:{
    type:String,
    trim:true,
    unique:true,

  }, 
  password:{
    type:String,
    trim:String,
    require:true,
  },
  products:{
    type:Array,
     default:[],
  },
  picture:{
    type:String,
  },
  gstin:{
    type:String
    
  }
})


const Admin = mongoose.model("admins",AdminSchema);

module.exports = Admin