///Use of reusable function forecast
const forecast = require("./utils/02-forecast");

forecast(22.75,77.72,(error, data) =>{
    console.log("Error : ",error);
    console.log("Data : ",data);
})