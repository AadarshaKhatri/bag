const express = require('express');
const router = express.Router();
const UserModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const generateToken = require('../utils/TokenGenerator');
const registerUser = require('../controller/Auth');


router.get("/register",(req,res)=>{
 res.render('register');
});

router.post("/register",registerUser);


router.get("/login",(req,res)=>{
  res.render('login');
})


router.post("/login", async (req,res)=>{
  try{
    const{email,password} = req.body
    const FoundUser = await UserModel.findOne({
      email:email,
    });


    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }


    if(!FoundUser){
      return res.status(401).json({
        message:"Username or Password is Incorrect"
      })
    }

    const IsPasswordMatch = await bcrypt.compare(password,FoundUser.password);
   
      if(!IsPasswordMatch) {
        return res.status(401).json({
          message:"Username or Password is Incorrect",
        });
      }else{
        const JWT_TOKEN = generateToken(FoundUser);
        res.cookie("token",JWT_TOKEN)
        // res.status(200).json({
        //   status:200,
        //   message:"User Logged In",
        // })
        res.redirect("/shop")
      };
  }catch(error){
    res.json({
      error:error.message,
    })
  }

})


module.exports = router;