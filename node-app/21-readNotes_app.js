const yargs = require("yargs");
const notes = require("./20-readNotes.js");

yargs.command({
  command: "read",
  describe: "read the note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "String",
    },
  },
  handler(argv) {
    notes.readNotes(argv.title);
  },
});

console.log(yargs.argv);
