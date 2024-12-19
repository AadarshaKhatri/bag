const express = require('express');
const router = express.Router();
const upload = require('../config/multer-config');
const ProductModel = require('../models/product');


router.post("/create",upload.single('image'), async (req,res)=>{
  const {name, price, discount, bgcolor, panelColor, textcolor} = req.body;
  try{

    const newProduct = await ProductModel.create({
     image:req.file.buffer,
     name :name,
     price:price,
     discount:discount,
     bgcolor:bgcolor,
     panelColor:panelColor,
     textColor:textcolor,
     });
     req.flash("success","Products Created Successfully!")
     res.redirect("/adminShop")
  }catch{
    res.status(500).json({
      message:"Internal Serve Error",
    })
  }


});



module.exports = router;