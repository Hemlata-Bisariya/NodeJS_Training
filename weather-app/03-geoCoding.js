//GeoCoding
//Address : latitude / longitude

const request = require("request");
const chalk = require("chalk");

const geoCodingURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaGVtbGF0YS1iaXNhcml5YSIsImEiOiJja3BoeDJhOTYwczBlMndwaXVjN3E1aXBzIn0.AhgON-_z_AlUT6yDFNsYPw&limit=1";

  request({ url: geoCodingURL, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to location services...");
  } else if (response.body.features.length === 0) {
    console.log("Unable to find search, Try another search...");
  } else {
    const latitude = response.body.features[0].center[0];
    const longitude = response.body.features[0].center[1];
    console.log(
      "Latitude : " +
        chalk.yellow.bold(latitude) +
        " And Longitude : " +
        chalk.yellow.bold(longitude)
    );
  }
});
