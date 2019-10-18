const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3000;

const teamRoutes = require('./routes/teams');
const memberRoutes = require('./routes/members');

mongoose
  .connect("mongodb://localhost:27017/teamX", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected MongoDB..."))
  .catch(err => console.log("Error:", err.message));

app.use(express.json());
app.use(express.static('public'));
app.use(cors());

app.use('/teams', teamRoutes);
app.use('/members', memberRoutes);

app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}...`));
