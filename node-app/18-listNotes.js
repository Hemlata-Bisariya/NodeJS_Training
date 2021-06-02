//Listing the notes :

const chalk = require("chalk");
const fs = require("fs");

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.red.inverse("List of notes"));
  notes.forEach((note) => {
    console.log(note.title);
  });
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
    listNotes : listNotes,
}
