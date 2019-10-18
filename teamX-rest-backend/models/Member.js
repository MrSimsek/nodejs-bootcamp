const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  name: String,
  age: Number
});

module.exports = mongoose.model("Member", memberSchema);
