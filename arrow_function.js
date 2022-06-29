// let x=55
// const square=function (x){
//  return x*x
// }

// const square= (x) =>{
//  return x*x
// }

// const square= (x) => x*x
// console.log(square(x))


const list={
 name:"Birthday Party",
 people:["guru","bharan","nmg"],
 //another function declaration
 // guess(){}
 guess: function(){
  // const that=this .... 2nd method for using this in arrow funcion..
  // console.log(this.name)
  // once the "this" is used ... we can use it in the arrowfunction...
  this.people.forEach( (person) =>  {
   console.log(person+" attended",list.name) // or we can use "list.name"...
  }
 )}
  
}
list.guess()