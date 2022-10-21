const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs")
const express=require("express");

const mysql=require("mysql");

const path=require("path");
const dotenv=require("dotenv");

const app=express();
dotenv.config({path:'./.env'})

const db=mysql.createConnection({
 host:process.env.BASE_host,
 database:process.env.BASE_server,
 user:process.env.BASE_user,
 password:process.env.BASE_password
})
exports.register=(req,res)=>{
 console.log(req.body)

 // const name=req.body.name;
 // const email=req.body.email;
 // const password=req.body.password;
 // const confirmpassword=req.body.confirmpassword;

 const{ name, email, password, confirmpassword}=req.body;


 db.query("SELECT email from user where email= ?", [email] , async(err,result)=>
 {
  if(err) console.log("Error");
  
  // results are in form of an array
  if((result.length)>0)
  {
   return res.render('register',{message:"email already in use"})
  }
  else if(password!=confirmpassword) 
  {
   return res.render('register',{message:"Password mismatch"})
  }
  
  let hashpassword=await bcrypt.hash(password,8);
  console.log("hashpassword",hashpassword)


  db.query("INSERT INTO user SET ?",{name:name,email:email,password:hashpassword},(err,result)=>{
   if(err)
   {
    console.log(err);
   }
   else{
    console.log(result);
    return res.render("register",{message:"User Registered"})
   }
  })

   
 })
 // res.send("testing");


}