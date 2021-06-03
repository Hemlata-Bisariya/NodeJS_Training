//Reading the notes :

const chalk = require("chalk");
const fs = require("fs");


const readNotes = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if(note)
  {
      console.log(chalk.inverse(note.title));
      console.log(note.body);
  }else{
      console.log(chalk.red.inverse("Note not found"));
  }
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("Created_File/json-2.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  readNotes: readNotes,
};
