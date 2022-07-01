const fs=require("fs");

const chalk=require('D:/BACKEND/LEARN/node_modules/chalk') ;

const getNotes=function(){
 return chalk.yellow("Your Notes...")
}

const addNote=function(title, body){
 const notes = loadnotes()
 // const duplicateNotes = notes.filter(function(note){
 //  return note.title===title
 // })
 const duplicateNote=notes.filter((note) => note.title===title)
 // if (duplicateNotes.length=== 0)
 // if(duplicateNote===undefined)
 if(!duplicateNote)
 {
  notes.push({
   title: title,
   body: body
  })
 
  saveNotes(notes)
  console.log(chalk.green("Notes added.."))
 }
 else{
  console.log(chalk.red("Notes title already exists!"))
 }

}

const removeNote=function(title){
 // console.log(title)

 const notes=loadnotes()

 const neededNote=notes.filter(function(note){
  return note.title!=title
 })
 
 // console.log(notes.title,"ggg",title)
  // console.log(chalk.bgGreen(title," is removed from notes"))
  // saveNotes(neededNote)

 if(notes.length> neededNote.length){
  console.log(chalk.bgGreen(title," is removed from notes"))
  saveNotes(neededNote)
 }
 else{
  console.log(chalk.bgRed(title," is not found!!"))
 }
}

const saveNotes = function(notes){
 const data_JSON=JSON.stringify(notes)
 fs.writeFileSync("./notes.json", data_JSON)
}

const loadnotes=function(){
 try{
  const data_buffer=fs.readFileSync("./notes.json")
  const data_JSON=data_buffer.toString()
  return JSON.parse(data_JSON)
 }
 catch(err){
  return []
 }
}

// listing title

const listNotes = function(){
 const notes=loadnotes()
 
 notes.forEach( (note)=> {
  console.log(note.title)
 });
}

// reading notes
const readNote=(title) => {
 const notes=loadnotes()
 const note=notes.find( (note) => note.title===title)
 
 if (note){ 
  console.log(note.title)
  console.log(note.body)
 }
 else {console.log("No notes available")}
}

module.exports ={
 getNotes:getNotes,
 addNote:addNote,
 removeNote:removeNote,
 listNotes:listNotes,
 readNote:readNote
}


// using arrow functions.....
// const loadNotes=function(){
//  console.log("hi");
//  try{
//   const data_buffer=fs.readFileSync("./note.json")
//   const data_JSON=data_buffer.toString()
//   return JSON.parse(data_JSON)
//   // return data
//  }
//  catch(e){
//   return []
//  }
// }


// exports.module={
//  getNotes:getNotes,
//  addNote:addNote
// }

// const fs = require('fs')

// exports.getNotes = () => {
//     return 'Your notes...'
// }

// exports.addNote = (title, body) => {
//     const notes = loadNotes()
//     const duplicateNotes = notes.filter(function (note) {
//         return note.title === title
//     })

//     if (duplicateNotes.length === 0) {
//         notes.push({
//             title: title,
//             body: body
//         })
//         saveNotes(notes)
//         console.log('New note added!')
//     } else {
//         console.log('Note title taken!')
//     }
// }

// const saveNotes = function (notes) {
//     const dataJSON = JSON.stringify(notes)
//     fs.writeFileSync('notes.json', dataJSON)
// }

// const loadNotes = function () {
//     try {
//         const dataBuffer = fs.readFileSync('notes.json')
//         const dataJSON = dataBuffer.toString()
//         return JSON.parse(dataJSON)
//     } catch (e) {
//         return []
//     }
// }

// exports.removeNote =(title) => {
//     const notes = loadNotes()
//     const notesToKeep = notes.filter(function (note) {
//         return note.title !== title
//     })

//     saveNotes(notesToKeep)
// }
