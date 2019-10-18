const express = require("express");
const router = express.Router();

const Publisher = require("../models/Publisher");

router.get("/", async (request, response) => {
  const publishers = await Publisher.find();
  return response.send(publishers);
});

router.post("/", async (request, response) => {
  const publisher = new Publisher(request.body);
  const newPublisher = await publisher.save();
  return response.send(newPublisher);
});

module.exports = router;