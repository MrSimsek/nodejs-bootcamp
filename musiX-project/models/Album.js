const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema({
  name: String,
  artist: String,
  releaseYear: Number,
});

module.exports = mongoose.model("Album", albumSchema);
