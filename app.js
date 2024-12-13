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
const IndexRouter = require("./routes/index-router");
const flash = require('connect-flash');
const session = require('express-session');

app.set("view engine", "ejs");
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
ConnectToDb();
dotenv.config();
app.use(flash());
app.use(session({
  resave:false,
  saveUninitialized:false,
  secret:"session sceret key here",
  cookie: { secure: false },
}))

//Port Number
const Port = 9999;
app.use("/",IndexRouter);
app.use("/admin",AdminRouter);
app.use("/user", UserRouter);
app.use("/product",ProductRouter)

app.listen(Port,()=>{
  console.log(`Server Listening on http://localhost:${Port}`);
})