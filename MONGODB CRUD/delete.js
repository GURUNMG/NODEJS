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

 //CRUD (D) Deleting 

//  deleting one particular collection
 db.collection('users').deleteOne({number:1235}).then((result)=>{
    console.log("Deleted Successfully")
 }).catch((error)=>{
    console.log("Deletion failed")
 })

 //delete many 
 const todeleteMany=db.collection("users").deleteMany({department:"CSE"})

 todeleteMany.then((result)=>{
    console.log("Deleted")
 }).catch((error)=>{
    console.log("Deletion failed")
 })

})