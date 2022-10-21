const express=require("express");

const mysql=require("mysql");

const path=require("path");
const dotenv=require("dotenv");
const e = require("express");

const app=express();
dotenv.config({path:'./.env'})

const db=mysql.createConnection({
 host:process.env.BASE_host,
 database:process.env.BASE_server,
 user:process.env.BASE_user,
 password:process.env.BASE_password
})

//PATH FOR SATAIC FILES LIKE CSS,JS etc....
const publicDirectory=path.join(__dirname,"./public")
app.use(express.static(publicDirectory));

// for getting values from form responses.
app.use(express.urlencoded({extended:false}))
app.use(express.json())// getting the values as json format..
//FOR SELECTING ENGINE
app.set("view engine","hbs");

// DATABASE CONNECTION
db.connect((err)=>{
 if(err) console.log("Error",err);
 else
 {
  console.log("MYSQL CONNECTED");
 }
})



app.use("/",require("./routes/pages"))

app.use("/auth",require("./routes/auth"))

app.use("/login",require("./routes/pages"))
// for sending response ... not for rendering the page..
// app.get("",(req,res)=>{
//  res.send("<h1>GURUBHARAN N M</h1>");
// })...it displays GURUBHARAN N M 

// app.get("",(req,res)=>{
//  res.render("index");
// })
// it displays the "index.hbs" file with styling .. which is located in public folder


// app.get('/register',(req,res)=>{
//  res.render("register")
// })
app.listen(5000,()=>{
 console.log("Server started");
})