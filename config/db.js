const mongoose = require('mongoose');

async function ConnectToDb(){
 try{
  await mongoose.connect("mongodb://localhost:27017/User").then(()=>console.log("Connected to Database"));

 }catch(err){
  console.log("Failed To Connect to the Database")
 }
}

module.exports = ConnectToDb