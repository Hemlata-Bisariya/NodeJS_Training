// validator module :

const validator = require("validator");

console.log(validator.isEmail("bisariyahemlata@gmail.com"));
console.log(validator.isURL("http://happy.com"));

/*
This library validates and sanitizes strings only.
If you're not sure if your input is a string, coerce it using input + ''. 
Passing anything other than a string will result in an error.
*/