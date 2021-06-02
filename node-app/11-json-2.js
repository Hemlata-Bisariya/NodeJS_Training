//Reading JSON file:
const fs = require("fs");

const dataBuffer = fs.readFileSync("Create_File/json-1.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

console.log(data);
console.log("Title : "+data.title);
console.log("Author : "+data.author);