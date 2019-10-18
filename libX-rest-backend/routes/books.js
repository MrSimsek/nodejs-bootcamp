const express = require("express");
const router = express.Router();

const Book = require("../models/Book");

router.get("/", async (request, response) => {
  const books = await Book.find();
  return response.send(books);
});

router.post("/", async (request, response) => {
  const book = new Book(request.body);
  const newBook = await book.save();
  return response.send(newBook);
});

module.exports = router;