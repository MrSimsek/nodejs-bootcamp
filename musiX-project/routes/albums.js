const express = require("express");
const router = express.Router();

const Album = require("../models/Album");

router.get("/", async (request, response) => {
  const albums = await Album.find();

  return response.render("albums", { title: "Albums Page", data: albums });
});

router.get("/add", async (request, response) => response.render("form", {title: 'Add Album'}));

router.post("/add", async (request, response) => {
  const album = new Album(request.body);

  const newAlbum = await album.save();

  return response.render('album', {title: newAlbum.name, data: newAlbum});
});

router.get("/:id", async (request, response) => {
  const albumId = request.params.id;
  const album = await Album.findById(albumId);

  return response.render("album", { title: album.name, data: album });
});

router.post("/", async (request, response) => {
  const album = new Album(request.body);

  const newAlbum = await album.save();

  return response.send(newAlbum);
});

router.put("/:id", async (request, response) => {
  const albumId = request.params.id;
  const updates = request.body;

  const updatedAlbum = await Album.findByIdAndUpdate(albumId, updates, {
    new: true
  });

  return response.send(updatedAlbum);
});

router.delete("/:id", async (request, response) => {
  const albumId = request.params.id;

  const deletedAlbum = await Album.findByIdAndRemove(albumId);

  return response.send(deletedAlbum);
});

module.exports = router;
