const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const dataBaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewURLParser: true },
  (error, client) => {
    if (error) {
      return console.log("unable to connect with database");
    }
    const db = client.db(dataBaseName);
    db.collection("users").insertMany(
      [
        {
          name: "Sonu",
          age: 17,
        },
        {
          name: "Sumit",
          age: 14,
        },
      ],
      (error, result) => {
        if (error) {
          return console.log("unable to  insert document");
        }
        console.log(result.ops);
      }
    );
  }
);
