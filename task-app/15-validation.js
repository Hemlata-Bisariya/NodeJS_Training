const mongoose =  require("mongoose")
const validator = require("validator")
mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
useNewUrlParser : true,     
useCreateIndex : true
})

const User = mongoose.model("User",{
    name : {
        type : String ,
        required : true,
        trim : true
    },
    email : {
        type : String ,
        required : true,
        trim : true,
        lowercase : true,
        validate(value){
            if(!validator.isEmail(value)) {
                throw new Error("Email is Invalid");
            }
        }
    },
    age : {
        type : Number,
        default : 0,
        validate(value) {
            if( value < 0 ) {
                throw new Error("Age must be  positive number")
            }
        }
    }
})

const user = new User({
name : "Hemlata Bisariya  ",
email : "Bisariyahemlata@gmail.com",
age : 27
})

user.save().then(() =>{
    console.log(user)
}).catch((error) =>{
    console.log("Error ", error)
})