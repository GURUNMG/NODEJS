// const request=require("postman-request");

const geocode=require("./utils/geocode");
const forecast=require("./utils/forecast");

const address=process.argv[2]

if(!address) 
{
    return console.log("Pleace provide the location to know further details...")
}
//for location
geocode(address,(error,data)=>{
    if(error)   console.log("error",error)
    else  {
        // console.log("data...",data) the object data... 
//   {latitude: 40.7306,longitude: -73.9866,location: 'New York, New York, United States'}

        // example...   forecast(-75.7088,44.1545,(error,data)=>
        forecast(data.latitude,data.longitude,(error,forecastdata)=>{
            if(error) console.log("error",error)
            else 
            {
                console.log(data.location)
                console.log(forecastdata)
            }
        })
    }
})

//for weather


