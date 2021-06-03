//Asynchronous nature of nodeJS :

const chalk = require("chalk");
console.log("starting....");

setTimeout(() => {
  console.log(chalk.red.inverse("2 second wait"));
}, 2000);

setTimeout(() => {
  console.log("0 second wait");
}, 0);

console.log("stoping.....");

/*
setTimeout is a function that allows you to run some code after a specific amount of time has passed.
setTimeout accepts two arguments.
The first is a callback function.
This function will run after the specified amount of time has passed.
The second argument is the amount of time in milliseconds to wait.
*/



