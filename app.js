const express = require('express');
const app = express();
const JWT = require('jsonwebtoken');
const path = require("path");
const cookieParser = require('cookie-parser');
const ConnectToDb = require('./config/db');
const dotenv = require('dotenv');
const AdminRouter = require("./routes/admin-route");
const ProductRouter = require("./routes/product-route");
const UserRouter =  require("./routes/user-route");



app.set("view engine", "ejs");
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
ConnectToDb();
dotenv.config();

//Port Number
const Port = 9999;

app.use("/admin",AdminRouter);
app.use("/user", UserRouter);
app.use("/product",ProductRouter)

app.listen(Port,()=>{
  console.log(`Server Listening on http://localhost:${Port}`);
})