const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/relationaldb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected to MongoDB..."));

const album = {
  name: "Tarkan En İyiler",
  artist: "5da823488f54532c735d33f3", // artist oluştuktan sonra
  songs: ["5da828adb48e5f2f31bd2d76", "5da828adb48e5f2f31bd2d77"] // song oluştuktan sonra
};

const song1 = {
  name: "Dönülmez Akşamın Ufkundayım",
  lyrcis: "Ahhh... dönülmez akşamın ufkundayız vakit çok geç.",
  duration: 3.45,
  artist: "5da823488f54532c735d33f3" // artist oluştuktan sonra
};

const song2 = {
  name: "Kuzu Kuzu",
  lyrcis: "İşte kuzu kuzu geldim...",
  duration: 3.25,
  artist: "5da823488f54532c735d33f3" // artist oluştuktan sonra
};

const artist = {
  name: "Tarkan",
  bio: "Tarkan 1972 yılında doğdu."
};

const songSchema = new mongoose.Schema({
  name: String,
  lyrcis: String,
  duration: Number,
  artist: { type: mongoose.Schema.Types.ObjectId, ref: "Artist" }
});

const Song = mongoose.model("Song", songSchema);

const albumSchema = new mongoose.Schema({
  name: String,
  artist: { type: mongoose.Schema.Types.ObjectId, ref: "Artist" },
  songs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Song" }]
});

const Album = mongoose.model("Album", albumSchema);

const artistSchema = new mongoose.Schema({
  name: String,
  bio: String
});

const Artist = mongoose.model("Artist", artistSchema);

// new Artist(artist).save().then(newArtist => console.log(newArtist));

// new Song(song1).save().then(newSong => console.log(newSong));
// new Song(song2).save().then(newSong => console.log(newSong));

// new Album(album).save().then(newSong => console.log(newSong));

// Album.find().then(albums => {
//   console.log(albums);
// });

// Population
Album.find()
  .populate("artist", "name")
  .populate("songs", "name")
  .then(albums => {
    console.log(albums);
    console.log(albums[0].songs);
  });

// Album.findById("5da82bd0d0274c30c49850b6").then(album => {
//   album.songs.forEach(songId => {
//     Song.findById(songId).then(song => console.log(song.name));
//   });
// });
