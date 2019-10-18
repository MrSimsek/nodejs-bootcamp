const express = require("express");
const mongoose = require("mongoose");

const authorRoutes = require('./routes/authors');
const bookRoutes = require('./routes/books');
const publisherRoutes = require('./routes/publishers');

const app = express();
const PORT = 3000;

mongoose
  .connect("mongodb://localhost:27017/libX-rest", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.log("Error:", err));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/authors", authorRoutes);
app.use("/books", bookRoutes);
app.use("/publishers", publisherRoutes);

app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`));
