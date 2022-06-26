
// validator package

const validator = require('validator');
// checkin it is Email
console.log(validator.isEmail("guru@gmail.com"));

// checking it is URL
console.log(validator.isURL("http://www.google.com"));

// if node_modules folder is deleted then use npm install...