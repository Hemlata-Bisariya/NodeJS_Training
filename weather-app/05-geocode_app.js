///Use of reusable function geocode

const geocode = require("./utils/01-geoCode.js");

geocode("Hoshangabad", (error, data) => {
  console.log("Error : ", error);
  console.log("Data : ", data);
});
