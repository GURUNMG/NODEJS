// object shorthand
const Name = "Gurubharan"
const Userage=19

const user={
 //Name: Name ...
 Name, // short hand property..
 age: Userage,
}

console.log(user)

//destructuring ... accessing properties from an object..

const product={
 label:"Gems",
 color:"Red",
 fixed:"yes",
 saleprice:undefined
}

// const label=product.label
// console.log(label)

//shorthand property
// {properties that you want to access}

//label:label_name... changing the variable name...
//rating=4... this default value will be alloted that properties doesnot exist...
// const{label:label_name,color,rating=4}=product

// console.log(label_name)
// console.log(color)
// console.log(rating)


// passing object as aarguments
// const transation= (order,myproduct) => {
//  const {label,color,rating} =myproduct
//  console.log(order,label,"color:"+color)
// }

// transation("order",product)

//passing object properties as a arguments..
//......................const{properties}
const transation= (type,{label,color})=> {
 console.log(type,label,"color:"+color)
}

transation("order",product)