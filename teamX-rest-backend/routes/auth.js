const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

router.post("/", async (request, response) => {
  let user = await User.findOne({ email: request.body.email });

  if (!user) return response.status(400).send("Invalid email or password.");

  const isPasswordValid = await bcrypt.compare(
    request.body.password,
    user.password
  );
  if (!isPasswordValid)
    return response.status(400).send("Invalid email or password.");

  const token = jwt.sign({ _id: user._id, email: user.email }, "jwtSecretKey");
  
  return response
    .header("x-jwt-token", token)
    .send(`Welcome back ${user.email}`);
});

module.exports = router;
