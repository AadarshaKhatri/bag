const mongoose = require('mongoose');
const { float } = require('webidl-conversions');

const ProductSchema = new mongoose.Schema({
  name:{
    type:String,
    trim:true,
  },
  image:{
    type:String,
  },
  price:{
    type:float,
  },
  discount:{
    type:float,
    default:0,
  },
  bgColor:{
    type:String,
  },
  panelColor:{
    type:String,
  },
  textColor:{
    type:String,
    
  }
});

const Product = mongoose.model("products",ProductSchema)