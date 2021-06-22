const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { "useNewUrlParser": true },
  (error, client) => {
    if (error) {
      return console.log("unable to connect database");
    }
    const db = client.db(databaseName);
    db.collection("users").findOne({ _id : new ObjectID("60cba1007c867711f0215301")}, (error, user) => {
      if (error) {
        return console.log("unable to  insert document.");
      }
      console.log(user);
    });
  }
);
