const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
  image:Buffer,
  name:String,
  price:Number,
  discount:{
    type:Number,
    default:0,
  },
  bgcolor:String,
  panelColor:String,
  textColor:String,
})
const Product = mongoose.model("products",ProductSchema)


module.exports = Product;