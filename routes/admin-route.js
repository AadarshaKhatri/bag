const express = require('express');
const router = express.Router();
const AdminModel = require("../models/admin-model");



router.get("/",(req,res)=>{
  res.send("Admin Page")
});


//this routes only exists if the environment variable is set up for development. It wont be available when the environment will be set up for production/testing.
if(process.env.NODE_ENV === "development"){
  router.post("/register", async (req,res)=>{
    
    let Admin  = await AdminModel.find();
    if(Admin.length>0){
      res.json({
        status: 503,
        message:"You don't have permission to create a new Owner"
      })
    }
    let {username,email,password} = req.body;
    const newAdmin = await AdminModel.create({
      username:username,
      email:email,
      password:password,
    })

    res.json({
      status:201,
      data:newAdmin,
    })
  })
};



module.exports = router;