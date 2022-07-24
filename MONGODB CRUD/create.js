// for connecting Mongodb.. path may vary 
// C:/Users/HP/mongodb/bin/mongod.exe --dbpath=C:/Users/HP/mongodb-data

const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient
// const ObjectId=mongodb.ObjectId

// const id= ObjectId()
// console.log(id.id)

const url="mongodb://127.0.0.1:27017"
const databaseName='task-manager'

MongoClient.connect(url,{useNewUrlParser:true}, (error,client)=>{
 if(error)
 {
  return console.log("Unable to connect to MongoDB")
 }

 console.log("Connected Successfully to MongoDB")

 const db=client.db(databaseName)

 // creatring a collection (C) CRUD
 // single data insert..
 db.collection('users').insertOne({name:"GURUBHARAN N M",age:19},(error, result) => {
   if(error) 
   {
    return console.log("Unable to insert user")
   }
   console.log(result)
  })

 // multiple data insert
 db.collection('users').insertMany([
  {  name:"bharan", age:20 },
  { name:"Jack", age:30 },
  { name:"Jill", age:30 },
 ],(error,result)=>{
  if(error) return console.log("Unable to insert collection into MongoDB")

  console.log(result)
 })

 db.collection('task').insertMany([
  {task_name:"Complete Assignments", status:"completed"},
  {task_name:"Project Submission", status:"not completed"},
  {task_name:"Cleaning Room", status:"completed"}
 ],(error, result) => {
  if(error){return console.log("Unable to insert collection task")}

  console.log("Inserting collection task",result)
 })
})