const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const AdminModel = require("../models/admin-model");
const generateToken = require('../utils/TokenGenerator');
const AdminLogin = require('../controller/AdminLogIn');





//this routes only exists if the environment variable is set up for development. It wont be available when the environment will be set up for production/testing.

if(process.env.NODE_ENV === "development"){


  router.get("/register",(req,res)=>{
    res.render('adminRegister');
    
  });


  router.post("/register", async (req,res)=>{
    
    let Admin  = await AdminModel.find();
    if(Admin.length>0){
      res.json({
        status: 503,
        message:"You don't have permission to create a new Owner"
      })
    }
    let {username,email,password} = req.body;
    const hashedPassowrd = await bcrypt.hash(password,10);
    const newAdmin = await AdminModel.create({
      username:username,
      email:email,
      password:hashedPassowrd,
    })


    const Json_Token = generateToken(newAdmin);
    if(!Json_Token){
      res.redirect('/adminShop')
      res.cookie("token",Json_Token);
      res.json({
        status:500,
        message:"Failed!"
      })
      
    }else{
      res.json({
        status:201,
        message:"User Created!"
      })
    
    }
 

  })

  router.get('/login',(req,res)=>{
    res.render('adminLogin')
  })
  router.post("/login",AdminLogin)

}

module.exports = router;