const request = require("postman-request")
const forecast=(latitude,longitude,callback)=>{
 const url="http://api.weatherstack.com/current?access_key=004daaa1dc712893d87efeeadae6ba76&query="+'latitude'+','+'longitude'
 request({url:url,json:true},(error,response)=>{
     if(error) callback("Please check your network connection",undefined)
     else if(response.body.error) callback("Unable to find location",undefined)
     else 
     {
     callback(undefined,
        // {temperature: response.body.current.temperature,
        //  mayrain: response.body.current.feelslike}
    "It is currently "+response.body.current.temperature+" degrees out"+"It feelslike "+response.body.current.feelslike+" degrees out"
     )
     }
 })
}

module.exports = forecast


// for location error remove lat and lon ...leave it a empty "="
// const url="http://api.weatherstack.com/current?access_key=004daaa1dc712893d87efeeadae6ba76&query=New%20York"
// // //for changin the unit ... use &unit=(m,s,f) select anyone... 

// // // request({url: url}, function(err, response) {
// // //  const data=JSON.parse(response.body);
// // //  console.log(data.current);
// // //  })

// request({url: url, json:true}, function(error, response) {
 // const data=response.body.current;
 // console.log(data.location.name); for location...
 // console.log(response.body.current);
// if(error) console.log("Unable to Connnect to the Weatherstack api.. please check your connection")
// else if(response.body.error) console.log("Provide correct latitude and longitute")
// else{
//  console.log("It is currently ",response.body.current.temperature," degrees out");
//  console.log("It feelslike ",response.body.current.feelslike," degrees out");
// }
//  })
