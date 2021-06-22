const {MongoClient, ObjectID} = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017"
const databaseName = "task-manager"

MongoClient.connect(connectionURL,{"useNewUrlParser": true} , (error,client) =>{
    if(error) {
        return console.log("Unable to connect database");
    }

    const db = client.db(databaseName);
    db.collection("users").find({age:27}).toArray( (error,users) =>{
        if(error) {
            return console.log("Unable to find users");
        }
        console.log(users)
    })
})

//find() = it return a cursor and cursor has toArray method which takes callback function 