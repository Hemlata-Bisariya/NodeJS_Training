// Creating File :

const fs = require("fs");
const notes = fs.writeFileSync("Created_File/notes.txt","I am Hemlata..");
console.log(notes);

/*
writeFileSync() is a synchronous method. 
The fs. writeFileSync() creates a new file if the specified file does not exist.
*/