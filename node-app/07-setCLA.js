/*---how to set up command line arguments that allow users to pass data into your application.----*/

const command = process.argv[2];
console.log(process.argv);

if(command==="add")
{
    console.log("add notes...!");
}
else if(command==="remove")
{
    console.log("remove notes...!");
}


/*
1.Command line arguments are values passed into your application from the terminal. 
2.Your Node.js application can access the command line arguments that were provided using process.argv.
3.This array contains at least two items. 
4.The first is the path to the Node.js executable. 
5.The second is the path to the JavaScript file that was executed. Everything 
after that is a command line argument*/

/*[
    'C:\\Program Files\\nodejs\\node.exe',
    'C:\\Users\\Hemlata Bisariya\\Desktop\\IDExecle\\NodeJS-Training\\node-app\\2.1-fileSystem.js',
    'add'
  ]
  add notes...!*/