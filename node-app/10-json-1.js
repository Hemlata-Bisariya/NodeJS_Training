// Storing Data with JSON [JavaScript Object Notation]:

const fs =  require("fs");
const book =  {
    title : "Wings of Fire.. ",
    author: "A.P.J. Abdul Kalam "
}


const bookJson = JSON.stringify(book);
console.log(fs.writeFileSync("Create_File/json-1.json",bookJson));
console.log(bookJson);

const bookObj = JSON.parse(bookJson);
console.log(bookObj);



// JSON.stringify converts a JavaScript object into a JSON string.
// JSON.parse converts a JSON string into a JavaScript object.
// JSON only supports double-quotes, All properties are wrapped in double-quotes.