const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/myproject")
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.log("Error:", err.message));

const albumSchema = new mongoose.Schema({
  name: String,
  artist: String,
  releaseYear: Number,
  tophit: String,
  isPlatinium: Boolean
});

const AlbumCollection = mongoose.model("Album", albumSchema);

const albumData = new AlbumCollection({
  name: "Lightning Bolt",
  artist: "Pearl Jam",
  releaseYear: 2013,
  tophit: "Sirens",
  isPlatinium: true
});

const albumData2 = new AlbumCollection({
  name: "Evolve",
  artist: "Imagine Dragons",
  releaseYear: 2017,
  tophit: "Believer",
  isPlatinium: false
});

async function createAlbum(data) {
  const album = await data.save();
  console.log(album);
}

async function updateAlbum(id, updateData) {
  const album = await AlbumCollection.findByIdAndUpdate(id, updateData, {
    new: true
  });

  console.log(album);
}

async function deleteAlbum(id) {
  const album = await AlbumCollection.findByIdAndRemove(id);
  console.log(album);
}

async function getAlbums() {
  const albums = await AlbumCollection.find();
  console.log(albums);
}

/**
 * CRUD Operations
 *
 * C - Create
 * R - Read
 * U - Update
 * D - Delete
 *
 */
createAlbum(albumData2);
getAlbums();
updateAlbum("5da6c7ee0338c406403559df", { name: "Even Flow" });
deleteAlbum("5da6c7ee0338c406403559df");
