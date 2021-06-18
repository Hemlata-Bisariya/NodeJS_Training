/*
How to run one asynchronous operation only after another asynchronous operation is complete.
That’ll allow you to use the output from geocoding as the input for fetching the weather
*/

// const geocode = require("./utils/01-geoCode.js");
// const forecast = require("./utils/02-forecast");

// const address = process.argv[2];

// if(!address){
//   console.log("Please provide an address.")
// }else{
//   geocode(address, (error, data) => {
//     if (error) {
//       return console.log(error);
//     }

//     forecast(data.latitude, data.longitude, (error, forcastData) => {
//       if (error) {
//         return console.log(error);
//       }
//       console.log(data.location);
//       console.log(forcastData);
//     });
//   });

// }

//Destructure code :

const geocode = require("./utils/01-geoCode.js");
const forecast = require("./utils/02-forecast");

const address = process.argv[2];

if (!address) {
  console.log("Please provide an address.");
} else {
  geocode(address, (error, { latitude, longitude, location }) => {
    if (error) {
      return console.log(error);
    }

    forecast(latitude, longitude, (error, forcastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log(forcastData);
    });
  });
}

//console.log(process.argv)
