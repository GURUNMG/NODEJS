//js file output shows on developer mode..


console.log("client side js file is available")

// fetch("http://puzzle.mead.io/puzzle").then((response)=>{
//  response.json().then((Data)=>{
//   console.log(Data)
//  })
// }) 
 
//address fetch.... code


const weatherForm=document.querySelector('form')
const search=document.querySelector('input')
const messageone=document.querySelector('#message-1')
const messagetwo=document.querySelector('#message-2')

weatherForm.addEventListener('submit',(e)=>{
 e.preventDefault()

 const location=search.value
 
 messageone.textContent="Loading..."
 messagetwo.textContent=""
  // address fetch...
 fetch("http://localhost:3001/weather?address="+location).then((response)=>{
 response.json().then((Data)=>{
  if(Data.error) 
  {
   messageone.textContent=Data.error
   // return console.log(Data.error)
  }
  else{
   messageone.textContent=Data.location
   messagetwo.textContent=Data.forecast
   // console.log(Data.location)
   // console.log(Data.forecast)
  }
  
  })
 })
})