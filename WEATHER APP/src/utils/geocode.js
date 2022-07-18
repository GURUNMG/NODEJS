const request = require("postman-request")

const geocode = (address,callback)=>{
 const geocodeURL ='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiZ3VydTEwMTAiLCJhIjoiY2w1M3NnemUzMHNicTNicXE5cXV6NHB3eCJ9.Mz8gdEjEi3bSHzKrAZj2OA&limit=1'
 request({url:geocodeURL,json:true},(error,{body})=>{
     if(error) {
         callback("Please check your internet connection",undefined);
     }
     else if(body.features.length === 0) {
         callback("unable to find the location",undefined)
     }
     else{
         callback(undefined,{
             latitude:body.features[0].center[1],
             longitude:body.features[0].center[0],
             location:body.features[0].place_name
         })
     }
 })
}

module.exports=geocode;


// 1st geocode
// const request = require('request')
// Geocoding

// const geocodeURL ='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZ3VydTEwMTAiLCJhIjoiY2w1M3NnemUzMHNicTNicXE5cXV6NHB3eCJ9.Mz8gdEjEi3bSHzKrAZj2OA&limit=1'

// request({ url: geocodeURL, json: true }, (error, response) => {
//     if(error) console.log("Please check your network connecions")
//     else if(response.body.features.length==0) console.log("Try another Location");
//     else{
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(latitude, longitude)
//     }
// })