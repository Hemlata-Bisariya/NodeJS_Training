// Use of add command :
const yargs = require("yargs");
const notes = require("./13-addNotes.js");

yargs.command({
  command: "add",
  describe: "add the new note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "String",
    },
    body: {
      describe: "note body",
      demandOption: true,
      type: "String",
    },
  },
  handler: function (argv) {
    notes.addNotes(argv.title, argv.body);
  },
});

console.log(yargs.argv);
