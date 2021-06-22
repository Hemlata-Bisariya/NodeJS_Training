const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const dataBaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { "useNewUrlParser": true },
  (error, client) => {
    if (error) {
      return console.log("unable to connect with database");
    }
    const db = client.db(dataBaseName);
    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Sonu",
    //       age: 17,
    //     },
    //     {
    //       name: "Sumit",
    //       age: 14,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("unable to  insert document");
    //     }
    //     console.log(result.ops);
    //   }
    // );

    db.collection("task").insertMany([
      {
        description : "Clean the room",
        completed : true
      },
      {
        description : "Completed Homework",
        completed : false
      },
      {
        description : "wash utensils",
        completed : true
      }],(error, result) => {
        if (error) {
          return console.log("unable to  insert document");
        }
        console.log(result.ops);
      })
  }
);
