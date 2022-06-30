const tasks={
 arr:[{
   text:"Shoppig",
   completed: true
  },
  {
   text:"Done",
   completed: false,
  },
  {
   text:"Error",
   completed: false
  }],

  getTaskToDo: function() {
   const TaskToDo=this.arr.filter( (task) => {
    // console.log(this.tasks)
    return task.completed === false;
   })
   return TaskToDo;
  }
  // getTaskToDo() {
  //  const TaskToDo=this.arr.filter((task) => task.completed === false)
  //  return TaskToDo;
  // }
}

// console.log(tasks.text);

console.log(tasks.getTaskToDo());