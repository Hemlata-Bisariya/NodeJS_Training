// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID;

const {MongoClient,ObjectID} = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017"
const databaseName = "task-manager"

const id = new ObjectID()

console.log(id);
console.log(id.id.length)
console.log(id.getTimestamp());
console.log(id.toHexString().length)

MongoClient.connect(connectionURL,{"useNewUrlParser":true},(error,client)=>{
    if(error){
        return console.log("unable to connect database")
    }
    const db = client.db(databaseName);
    db.collection("users").insertOne({
        _id : id,
        name : "Sonu",
        age : 15
    },(error,result)=>{
        if(error){
            return console.log("unable to  insert document.");
        }
        console.log(result.ops)
    })
})

