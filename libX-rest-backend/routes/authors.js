const express = require("express");
const router = express.Router();

const Author = require("../models/Author");

router.get("/", async (request, response) => {
  const authors = await Author.find();
  return response.send(authors);
});

router.post("/", async (request, response) => {
  const author = new Author(request.body);
  const newAuthor = await author.save();
  return response.send(newAuthor);
});

router.put("/:id", async (request, response) => {
  const author = new Author(request.body);
  const newAuthor = await author.save();
  return response.send(newAuthor);
});

module.exports = router;