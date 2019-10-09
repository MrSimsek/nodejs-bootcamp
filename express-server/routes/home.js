const express = require('express');
const router = express.Router();

router.get("/", (request, response) => response.send("<h1>Method: GET</h1>"));
router.post("/", (request, response) => response.send("<h1>Method: POST</h1>"));
router.put("/", (request, response) => response.send("<h1>Method: PUT</h1>"));
router.delete("/", (request, response) =>
  response.send("<h1>Method: DELETE</h1>")
);

module.exports = router;