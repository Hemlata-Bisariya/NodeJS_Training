// Reading a file :
const fs = require("fs");
const notes = fs.readFileSync("Created_File/notes.txt").toString();
console.log(notes);

/*
readFileSync() method is an inbuilt application programming interface of fs module.
which is used to read the file and return its content. 
*/