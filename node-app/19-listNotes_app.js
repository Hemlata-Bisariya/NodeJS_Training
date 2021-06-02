const yargs = require("yargs");
const notes = require("./18-listNotes.js");

yargs.command({
  command: "list",
  describe: "list your notes",
  handler() {
    notes.listNotes();
  },
});

console.log(yargs.argv);
