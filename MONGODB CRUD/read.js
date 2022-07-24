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

 //READING (R)CRUD

 db.collection('task').findOne({task_name:'Cleaning Room'},(error, data) => {
  if(error){
   return console.log("Data is not available  please check once spelling")
  }
  console.log(data)

  db.collection('task').find({status:"completed"}).toArray((error,data)=>{
   if(error) 
   {
    return console.log("Data not found")
   }
   console.log(data)
  })
  
  //to count : lenght of the output ... thereforet the output is in the form of array..
  // db.collection('task').find({status:"completed"}).count((error,count)=>{
  //  if(error) 
  //  {
  //   return console.log("Data not found")
  //  }
  //  console.log(count)
  // })
 })

})