const express = require("express");
const mongoose = require("mongoose");

const homeRoutes = require("./routes/home");
const albumsRoutes = require("./routes/albums");

const app = express();

const PORT = 3000;

mongoose
  .connect("mongodb://localhost:27017/musixApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected to MongoDB..."));

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use("/", homeRoutes);
app.use("/albums", albumsRoutes);

// 404 Page
app.get("*", (request, response) => response.status(404).render("404"));

app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}...`));
