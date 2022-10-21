const express =require("express")

const logcontroller=require("../controllers/log")
const router=express()

router.get("/register",logcontroller.register);

module.exports =router;