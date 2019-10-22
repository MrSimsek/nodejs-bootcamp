const express = require("express");
const router = express.Router();
const _ = require("lodash");
const bcrypt = require("bcrypt");

const User = require("../models/User");
const { checkAuth } = require("../middleware/auth");

// Getting the current user
router.get("/me", checkAuth, async (request, response) => {
  const user = await User.findById(request.user._id);
  return response.send(_.pick(user, ['email']));
});

router.post("/", async (request, response) => {
  let user = await User.findOne({ email: request.body.email });
  if (user) return response.status(400).send("User already registered.");

  user = new User(request.body);

  const salt = await bcrypt.genSalt();
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();

  return response.send(_.pick(user, ["_id", "email"]));
});

module.exports = router;
