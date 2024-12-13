const mongoose = require('mongoose');
const config = require('config');
const dbgr = require("debug")("development:mongoose");


async function ConnectToDb(){
 try{
  await mongoose.connect(`${config.get("MONGO_URI")}/bag`).then(()=>dbgr("Connected to Database"));

 }catch(err){
  dbgr("Failed To Connect to the Database")
 }
}

module.exports = ConnectToDb