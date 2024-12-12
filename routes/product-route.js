const express = require('express');
const router = express.Router();



router.get("/product1",(req,res)=>{
  res.send("Product Page")
});



module.exports = router;