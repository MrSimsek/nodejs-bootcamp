const mongoose = require("mongoose");

const publisherSchema = new mongoose.Schema({
  name: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "Author" },
  publisher: { type: mongoose.Schema.Types.ObjectId, ref: "Publisher" },
  genre: String
});

const Book = mongoose.model("Book", publisherSchema);

module.exports = Book;
