const bcrypt = require('bcrypt');
const UserModel = require("../models/user-model");
const generateToken = require("../utils/TokenGenerator");

async function registerUser(req,res){
    try{
      const {username,email,password} = req.body;
      const existingUser = await UserModel.findOne({
        email:email,
      });

      if(existingUser){
        res.json({
          status:409,
          message:"User Already Exists"
        })
      }
      
      if(!username || !email || !password){
        res.json({
          message:"Input Missing"
        });
      }
      
      const hashedPassword = await  bcrypt.hash(password,10);
      const newUser =  await UserModel.create({
        email:email,
        username:username,
        password:hashedPassword,
      });
  
      const JWT_TOKEN = generateToken(newUser);
      res.cookie("token",JWT_TOKEN);
      if(!JWT_TOKEN){
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
   

    }catch(error){
      res.json({
        message:error.message,
      })
  
    }
  
  }



module.exports = registerUser;