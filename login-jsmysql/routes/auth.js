const express =require("express")

const authcontroller=require("../controllers/auth")
const router=express()

router.post("/register",authcontroller.register);

module.exports =router;