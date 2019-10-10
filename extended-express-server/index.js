const express = require("express");
const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (request, response) => response.render("index", {title: 'HOME'}));
app.get("/about", (request, response) => response.render("about", {title: 'ABOUT'}));

app.listen(3000, () => console.log("Server is listening..."));
