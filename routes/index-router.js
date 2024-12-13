const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middleware/LogInCheck');

router.get("/",isLoggedIn,(req,res)=>{
  res.send("Index Page");
});


router.get("/shop",isLoggedIn,(req,res)=>{
  res.send("This is Shop Page");
})




module.exports = router