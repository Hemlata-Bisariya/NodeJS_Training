// saving new notes to the file system

const fs = require("fs");
const chalk = require("chalk");


const addNotes = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New notes added"));
  } else {
    console.log(chalk.blue.inverse("note title taken"));
  }
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("Created_File/json-2.json", dataJSON);

};


const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("Created_File/json-2.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNotes : addNotes
};
