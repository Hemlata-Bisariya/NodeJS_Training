/* how to use Yargs to easily set up a more complex set of arguments for your application*/

const yargs = require("yargs");

//create add command -->
yargs.command({
  command: "add",
  describe: "add the new notes",
  handler: function () {
    console.log("new notes are added");
  },
});

//create remove command -->
yargs.command({
  command: "remove",
  describe: "remove the notes",
  handler: function () {
    console.log("removing the notes");
  },
});

//create read command -->
yargs.command({
  command: "read",
  describe: "read the notes",
  handler: function () {
    console.log("reading the notes");
  },
});

//create list command -->
yargs.command({
  command: "list",
  describe: "list the note",
  handler: function () {
    console.log("listing the noteds");
  },
});

console.log(yargs.argv);


/*
1. yargs can be used to make it easier to work with command line arguments
2. First yargs.version is used to set up a version for the command line tool.
3. Second yargs.command is used to add support for a new command.
4. This command can be triggered by providing its name as a command line argument
eg node filename.js commat
   node 2.2-yargs-1.js add
   o/p new notes are added

   node 2.2-yargs-1.js remove
   o/p removing the notes
*/