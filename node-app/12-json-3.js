//Change in JSON records in the file system :

const fs =  require("fs");

const dataBuffer = fs.readFileSync("json-1.json");
const fileJSON = dataBuffer.toString();
const data = JSON.parse(fileJSON);

data.title ="The Alchemist";
data.author = "Paulo Coelho";

const dataJSON = JSON.stringify(data);
console.log(fs.writeFileSync("Create_File/json-1.json",dataJSON));
console.log(dataJSON);

