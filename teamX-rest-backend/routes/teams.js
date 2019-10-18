const express = require("express");
const router = express.Router();

const Team = require("../models/Team");

router.get("/", async (request, response) => {
  const teams = await Team.find();
  return response.send(teams);
});

router.get("/:id", async (request, response) => {
  const team = await Team.findById(request.params.id);
  return response.send(team);
});

router.post("/", async (request, response) => {
  const team = new Team(request.body);
  const savedTeam = await team.save();
  return response.send(savedTeam);
});

router.put("/:id", async (request, response) => {
  const updatedTeam = await Team.findByIdAndUpdate(
    request.params.id,
    request.body,
    {
      new: true
    }
  );
  return response.send(updatedTeam);
});

router.delete("/:id", async (request, response) => {
  const deletedTeam = await Team.findByIdAndRemove(request.params.id);
  return response.send(deletedTeam);
});

module.exports = router;
