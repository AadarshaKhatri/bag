const express = require('express');
const router = express.Router();



router.get("/user1",(req,res)=>{
  res.send("User Page")
});



module.exports = router;