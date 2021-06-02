// Appending a file :

const fs = require("fs");
const notes = fs.appendFileSync("Created_File/notes.txt","I am working on nodejs");
console.log(notes);

/*
The fs. appendFileSync() method is used to synchronously append the given data to a file. 
A new file is created if it does not exist. 
*/