const mongoose = require("mongoose");

const publisherSchema = new mongoose.Schema({
  name: String,
  founded: Number,
  authors: { type: mongoose.Schema.Types.ObjectId, ref: "Author" }
});

const Publisher = mongoose.model("Publisher", publisherSchema);

module.exports = Publisher;
