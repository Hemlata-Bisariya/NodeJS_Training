const http = require("http");
const url =
  "http://api.weatherstack.com/current?access_key=816532af7a629611fdd8e754d155d398&query=22,77&unit=c";

const request = http.request(url, (response) => {
  let data = " ";
  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("An error : ", error);
});

request.end();
