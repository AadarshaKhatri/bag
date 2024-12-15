const express = require('express');
const router = express.Router();
const UserModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const userLogin = require('../controller/UserLogin');
const generateToken = require('../utils/TokenGenerator');
const registerUser = require('../controller/Auth');
const isLoggedIn = require('../middleware/LogInCheck');


router.get("/register",(req,res)=>{
 res.render('register');
});

router.post("/register",registerUser);


router.get("/login",(req,res)=>{
  res.render('login');
})


router.post("/login", userLogin);

router.get("/logout",isLoggedIn,(req,res)=>{
  res.cookie("token","");
  res.redirect('/user/login');
  
})



module.exports = router;