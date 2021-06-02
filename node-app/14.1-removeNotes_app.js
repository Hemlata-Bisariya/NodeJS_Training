// Use Of Remove Command
const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./14-removeNotes.js");

yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "String",
    },
  },
  handler: function (argv) {
    notes.removeNotes(argv.title);
  },
});

console.log(yargs.argv);