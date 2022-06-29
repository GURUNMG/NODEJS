
const nt=require("./notes")

// video 19...

const { argv } = require("yargs");
const yargs = require("yargs");

// yargs list in key value pairs
// console.log(yargs.argv);

// yargs.version("version") for converting version...

//add,remove,read,list .... commands

//Creating a command

// adding note
yargs.command({
 command:"add",
 describe:"Add a new note",
 builder:{
  title:{
   describe:"Title is needed to add a new note",
   demandOption:true,
   type:"string"
  },
  body:{
   describe:"Body is theme of the book",
   demandOption:true,
   type:"string"
  }
},
 // handler executes when the command is executed...
 handler:function(){
  // console.log("Adding a new note...");
  // console.log("Title:",argv.title);
  // console.log("Body:",argv.body);
  nt.addNote(argv.title, argv.body)
 }
})

// removing a note
yargs.command({
 command:"remove",
 describe:"Remove a note",
 builder:{
  title:{
   describe:"Title is needed to add a new note",
   demandOption:true,
   type:"string"
  },
  body:{
   describe:"Body is theme of the book",
   demandOption:true,
   type:"string"
  }
},
 handler:function(argv){
  // console.log("Adding a new note...");
  // console.log("Title:",argv.title);
  // console.log(" Body:",argv.body);
  nt.removeNote(argv.title);
 }
})

yargs.command({
 command:"read",
 describe:"Read a note",
 builder:{
  title:{
   describe:"Title is needed to add a new note",
   demandOption:true,
   type:"string"
  },
  body:{
   describe:"Body is theme of the book",
   demandOption:true,
   type:"string"
  }
},
 handler:function(){
  console.log("Adding a new note...");
  console.log("Title:",argv.title);
  console.log(" Body:",argv.body);
 }
})

yargs.command({
 command:"list",
 describe:"List all notes",
 builder:{
  title:{
   describe:"Title is needed to add a new note",
   demandOption:true,
   type:"string"
  },
  body:{
   describe:"Body is theme of the book",
   demandOption:true,
   type:"string"
  }
},
 handler:function(){
  console.log("Adding a new note...");
  console.log("Title:",argv.title);
  console.log(" Body:",argv.body);
 }
})

// console.log(yargs.argv); // instead of this use parse..
yargs.parse();
// const m=yargs.argv;