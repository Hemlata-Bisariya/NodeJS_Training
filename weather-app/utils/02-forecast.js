const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=8d5d487b714c96873a269872ea4bfb65&query=" +
    latitude +
    "," +
    longitude +
    "&unit=c";

  // request({ url: url, json: true }, (error, response) => {
  //   if (error) {
  //     callback("Unable to connect to weather services...", undefined);
  //   } else if (response.body.error) {
  //     callback("Unable to fine location", undefined);
  //   } else {
  //     callback(
  //       undefined,
  //       response.body.current.weather_descriptions[0] +
  //         ". It is currently " +
  //         response.body.current.temperature +
  //         " degrees out, There is a " +
  //         response.body.current.precip +
  //         "% chance of rain."
  //     );
  //   }
  // });

  //Destructure and Shorthand propertys:
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather services...", undefined);
    } else if (body.error) {
      callback("Unable to fine location", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ". It is currently " +
          body.current.temperature +
          " degrees out, There is a " +
          body.current.precip +
          "% chance of rain."
      );
    }
  });
};

module.exports = forecast;
