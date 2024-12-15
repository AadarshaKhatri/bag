const bcrypt = require('bcrypt');
const AdminModel = require("../models/admin-model");
const generateToken = require("../utils/TokenGenerator");

async function adminLogin(req,res){
  try{
    const{email,password} = req.body
    const FoundUser = await AdminModel.findOne({
      email:email,
    });


    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }


    if(!FoundUser){
      return res.status(401).json({
        message:"User is Incorrect"
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
        res.redirect("/adminShop")
      };
  }catch(error){
    res.json({
      error:error.message,
    })
  }

}


module.exports = adminLogin;