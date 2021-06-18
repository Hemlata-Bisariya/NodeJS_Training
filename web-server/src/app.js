const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geocode = require("./utils/01-geoCode");
const forecast = require("./utils/02-forecast");

const app = express();

//Define Path For Express Directory
const publicDirectoryPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views"); // Customizing the views directory.
const partialPath = path.join(__dirname, "../templates/partials");

//Set HandleBars Engine and View Location
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialPath);

//Set Static Directory to serve :
app.use(express.static(publicDirectoryPath));

// home page  -> display list of users
app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Hemlata Bisariya",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Hemlata Bisariya",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    heplText: "This is some helpful text",
    title: "Help",
    name: "Hemlata Bisariya",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "You must provide a address!",
    });
  }

  geocode(req.query.address, (error, {latitude, longitude, location } = {} ) => {
    if (error) {
      return res.send({ error });
    }
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return res.send({ error });
      }
      res.send({
        forecast: forecastData,
        location,
        address: req.query.address,
      });
    });
  });
});

app.get("/products", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term",
    });
  }
  console.log(req.query.search);
  res.send({
    product: [],
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Hemlata Bisariya",
    errorMessage: "Help Article Not Found",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Hemlata Bisariya",
    errorMessage: "Page Not Found",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port number 3000 ");
});

//The path module provides utilities for working with file and directory paths. :
