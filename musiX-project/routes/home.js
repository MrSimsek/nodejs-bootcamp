const express = require("express");
const router = express.Router();

router.get("/", (request, response) =>
  response.render("home", { title: "MusiX App" })
);

module.exports = router;
