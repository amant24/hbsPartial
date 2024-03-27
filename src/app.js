const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", viewsPath);
app.use(express.static(publicDirectoryPath));
hbs.registerPartials(partialPath);

app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Express App",
    name: "Aman Tiwari",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Aman Tiwari",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "This is some help text",
    title: "Help",
    name: "Aman Tiwari",
  });
});

app.listen(3000, () => {
  console.log("listening on http://localhost:3000");
});

app.get("/ExpressApp", (req, res) => {
  res.send({
    forecast: "It is  raining",
    location: "Delhi",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Aman Tiwari",
    errorMessage: "Page not found",
  });
});
