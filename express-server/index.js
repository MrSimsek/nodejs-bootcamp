const express = require("express");
const morgan = require("morgan");
const fs = require("fs");

const logger = require("./middleware/logger");

const homeRoutes = require("./routes/home");
const gamesRoutes = require("./routes/api/games");

const app = express();

// Custom middleware that logs each request
app.use(logger);

// Write to a file with morgan
app.use(
  morgan("tiny", {
    stream: fs.createWriteStream("./history.log", { flags: "a" })
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); // To access static files like css files, images etc.

app.use("/", homeRoutes);
app.use("/api/games", gamesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}...`));
