const mongoose = require("mongoose");

// Connect to MongoDB server
mongoose
  .connect("mongodb://localhost:27017/myapp")
  .then(() => console.log("Connected to MongoDB..."));

// Create a schema
const gameSchema = new mongoose.Schema({
  name: String,
  developer: String,
  genres: [String],
  createdDate: { type: Date, default: Date.now },
  releaseYear: Number,
  isGameOfTheYear: Boolean
});

// Create a model from schema
const Game = mongoose.model("Game", gameSchema);

const game = new Game({
  name: "God of War",
  developer: "Santa Monica",
  genres: ["rpg", "action"],
  releaseYear: 2018,
  isGameOfTheYear: true
});

// Save data to collection in MongoDB
game.save().then(game => console.log(game));

// Get all data in a collection from MongoDB
Game.find().then(games => console.log(games));

// Update data from a collection query with id
// new: true returns the updated data
Game.findByIdAndUpdate(
  "5da43fee6b3f663283ab7b06",
  { name: "Skyrim" },
  { new: true }
).then(game => console.log(game));

// Update data from a collection query with prop
// new: true returns the updated data
Game.findOneAndUpdate(
  { name: "Skyrim" },
  { name: "Godzilla" },
  { new: true }
).then(game => console.log(game));

// Delete data from a collection
Game.findOneAndRemove({ name: "God of War" }).then(result => console.log(result));
