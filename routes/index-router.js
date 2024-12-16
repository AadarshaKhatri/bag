const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middleware/LogInCheck');

router.get("/",isLoggedIn,(req,res)=>{
  res.redirect("/shop")
});


router.get("/shop",isLoggedIn,(req,res)=>{
  res.render('shop')
});


if(process.env.NODE_ENV === "development"){
  router.get("/adminShop",isLoggedIn,(req,res)=>{
    res.send("This is admin Shop");
  })
}


module.exports = router