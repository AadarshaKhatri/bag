const express = require('express');
const router = express.Router();



router.get("/admin1",(req,res)=>{
  res.send("Admin Page")
});



module.exports = router;