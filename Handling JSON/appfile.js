const fs=require("fs");

const data_buffer={title:"mereum", des: "hi"}
const data_json=JSON.stringify(data_buffer)
const data=JSON.parse(data_json)
console.log(data)


// for json file....
const buffer=fs.readFileSync("D:/BACKEND/LEARN/1json.json")
// prints the json in string fromat
console.log(buffer.toString())
