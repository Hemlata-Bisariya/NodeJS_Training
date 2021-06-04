// Print Forecast to  the user:
//print : It is currently __ degree out, There is a __ % chance of rain
//The request library allows it to automatically parse JSON data into a JavaScript object.

const request = require("request");
const url =
  "http://api.weatherstack.com/current?access_key=8d5d487b714c96873a269872ea4bfb65&query=22.744108,77.736969";

request({ url: url, json: true }, (error, response) => {
  // const data = JSON.parse(response.body);
  // console.log(data);
  console.log(
    response.body.current.weather_descriptions[0] +
      ". It is currently " +
      response.body.current.temperature +
      " degrees out, There is a " +
      response.body.current.precip +
      "% chance of rain."
  );
  console.log(
    "There is feel like " + response.body.current.feelslike + " degrees out."
  );
});
