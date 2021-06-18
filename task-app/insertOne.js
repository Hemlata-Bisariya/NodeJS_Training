//CRUD Create delete Update Read

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const dataBaseName = "task-manager";

MongoClient.connect(connectionURL,{ "useNewUrlParser": true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connnect user");
    }
    console.log("connected correctly");
    const db = client.db(dataBaseName);
    db.collection("users").insertOne(
      {
        name: "Hemlata",
        age: 27,
      },
      (error, result) => {
        if (error) {
          return console.log("Unable to insert data");
        }
        console.log(result.ops);
      }
    );
  }
);
