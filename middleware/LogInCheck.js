const jwt = require('jsonwebtoken');
const UserModel = require('../models/user-model');


async function isLoggedIn(req,res,next){
  if(!req.cookies.token){
    req.flash("error","Log In First")
   return res.redirect("/user/login");  
   }
  try{
    
    let decoded = jwt.verify(req.cookies.token, process.env.SESSION_SECRET);
    let user  = await UserModel.findOne({
      email:decoded.email,
    }).select("-password");

    req.user = user
    next();
  }catch(err){
    res.status(500).json({
      message:"Internal Sever Error",
    })
  }
}

module.exports = isLoggedIn