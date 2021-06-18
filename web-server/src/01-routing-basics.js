const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.send("This is home..!");
});

app.get("/help", (req, res) => {
  res.send("Help page");
});

//serving up HTML :

app.get("/html", (req, res) => {
  res.send("<h1>I am html page .</h1>");
});

//serving up JSON :
app.get("/json", (req, res) => {
  res.send({
    name: "Hemlata",
    age: 26,
  });
});

app.get("/objWithArray", (req, res) => {
  res.send([
    {
      name: "Hemlata",
      age: 26,
    },
    {
      name: "Hemlata Bisariya",
      age: 26,
    },
  ]);
});

app.listen(3000, () => {
  console.log("Server is up on port no 3000 ");
});

/*
app.get() :  set up a handler for an HTTP GET request.
The first argument is the path to set up the handler for.
The second argument is the function to run when that path is visited. 

res.send() : Calling res.send in the route handler allows you to send back a 
message as the response.
This will get shown in the browser.

app.listen() :  start the server with the port you want to listen on.
use ctrl + c to terminate the process.

When we provide object it is automatically going to stringify  the JSON
*/
