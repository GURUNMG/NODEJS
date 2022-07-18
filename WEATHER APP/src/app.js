// nodemon node src/app.js -e js,hbs
// for hbs..
const forecast=require('./utils/forecast');
const geocode=require('./utils/geocode');

const { response } = require('express');
const express=require('express');
const path=require('path');
const hbs=require('hbs');

const app=express();

// console.log(__dirname) //for getting directory
// console.log(__filename) //for getting file name these two need ["path" modules...]

// app.get("",(req,res)=>{
//  res.send("<h1>Weather</h1>")
// })

// app.get('/help',(req,res)=>{
//  res.send([{
//   name:"GURU"
//  },{
//   name:"BHARAN"
//  }])
// })
//prints the json in browser

// app.get('/about',(req,res)=>{
//  res.send("<h1>About page</h1>")
// })

//help page
// app.get('/weather',(req,res)=>{
//  res.send([{
//   location:"New York",
//   rain:"NO"
//  }])
// })

const publicpath=path.join(__dirname,"../public")

//if the views folder name is changed
const viewsPath=path.join(__dirname,"../templates/views")
const partialsPath=path.join(__dirname,"../templates/partials")

app.set("view engine","hbs")// if we use this we no need to specifiy the extension of the hbs file...
app.set('views', viewsPath)

//setting static files
app.use(express.static(publicpath))

hbs.registerPartials(partialsPath)

//home page
app.get("",(req,res)=>{
 res.render("index",{title: "Home page",name:"Guru"})
})

//about page
app.get("/about",(req,res)=>{
 res.render("about",{title:"About me",name:"Guru"})
})

//help page
app.get("/help",(req,res)=>{
 res.render("help",{title:"Help page",name:"Guru"})
})

app.get("/weather",(req,res)=>{
 if(!req.query.address)
 {
  return res.send({error:"Failed to locate Address"})
 }

 geocode(req.query.address, (error,{latitude,longitude,location}={})=>{
  if(error)
  {
    return res.send({error:"Failed to locate try another search"})
  }

  forecast(latitude,longitude,(error,forecastdata)=>{
    if(error)
    {
      return res.send({error:"Failed to locate ForecastData"})
    }
    res.send(
      {
        forecast:forecastdata,location,
        address:req.query.address
      }
    )
  })
 })

 
})

app.get("/products",(req,res)=>{
 if(!req.query.search)
 {
  return res.send({error:"Error in searching for products"}) 
 }
 // console.log(res.query.search)
 res.send({products:[]})
})

app.get("/help/*",(req,res)=>{
 res.render("helpp",{title:"Help artilce not found..",name:"Guru"})
})

//page not found *... (express)
app.get("*",(req,res)=>{
 res.render("other",{title:"Page not found",name:"Guru"})
})

app.listen('3001', ()=>{
 console.log("Server listening on port 3001")
})
