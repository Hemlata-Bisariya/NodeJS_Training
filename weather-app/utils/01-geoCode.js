const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?access_token=pk.eyJ1IjoiaGVtbGF0YS1iaXNhcml5YSIsImEiOiJja3BoeDJhOTYwczBlMndwaXVjN3E1aXBzIn0.AhgON-_z_AlUT6yDFNsYPw&limit=1";

  // request({ url: url, json: true }, (error, response) => {
  //   if (error) {
  //     callback("Unable to connect to location services...", undefined);
  //   } else if (!response.body.features.length) {
  //     callback("Unable to find search, Try another search...", undefined);
  //   } else {
  //     callback(undefined, {
  //       latitude: response.body.features[0].center[1],
  //       longitude: response.body.features[0].center[0],
  //       location: response.body.features[0].place_name,
  //     });
  //   }
  // });


  //Destructure code :
  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback("Unable to connect to location services...", undefined);
    } else if (!body.features.length) {
      callback("Unable to find search, Try another search...", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude:body.features[0].center[0],
        location:body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode ;
