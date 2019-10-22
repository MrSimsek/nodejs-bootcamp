const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 3000;

const teamRoutes = require("./routes/teams");
const memberRoutes = require("./routes/members");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

mongoose
  .connect("mongodb://localhost:27017/teamX", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.log("MongoDB Error:", err.message));

app.use(express.json());
app.use(express.static("public"));
app.use(cors());

if (process.env.NODE_ENV === "development") {
  console.log("Morgan enabled...");
  app.use(morgan("tiny"));
}

app.use("/teams", teamRoutes);
app.use("/members", memberRoutes);
app.use("/users", userRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}...`));
