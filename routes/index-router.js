const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middleware/LogInCheck');
const ProductModel = require("../models/product");


router.get("/",isLoggedIn,(req,res)=>{
  res.redirect("/shop")
});


router.get("/shop",isLoggedIn, async (req,res)=>{
  let Products = await ProductModel.find();
  
  res.render('shop',{Products})
});


// if(process.env.NODE_ENV === "development"){
  router.get("/adminShop",isLoggedIn,(req,res)=>{
    const success = req.flash('success');
    res.render('adminShop',{success})
  })
// }


module.exports = router