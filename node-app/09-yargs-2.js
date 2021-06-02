 /*How to use yargs  to allow users to pass in the title 
and body of their notes using command line options-*/


const yargs =  require("yargs");
yargs.command({
    command : "add",
    describe : "add the new note",
    builder : {
        title : {
            describe : "note title",
            demandOption : true,
            type : "String"
        },
        body : {
            describe : "note body",
            demandOption : true,
            type : "String"
            }
        },
        handler : function(argv)
        {
            console.log("Title :" + argv.title);
            console.log("Body :" + argv.body);
        }
    })

    console.log(yargs.argv);


/*
 1.You can set up options for a command using the builder property.
 2.The add command can be used with two options. 
 3.The first is title which is used for the title of the note being added. 
 4.The second is body which is used for the body of the note being added. 
 5.Both options are required because demandOption is set to true. 
 6.Both are also set up to accept string input because type is set to 'string'
 7.The add command can now be used with --title and --body.
   eg node filename.js add --title="Study-Material" --body="pen,pencil,book,copy"
*/