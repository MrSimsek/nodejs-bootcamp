const Joi = require("joi");
const express = require("express");
const router = express.Router();

let games = [
  { id: 1, name: "God of War" },
  { id: 2, name: "Spiderman" },
  { id: 3, name: "Skyrim" }
];

router.get("/", (request, response) => response.send(games));

router.get("/:id", (request, response) => {
  const game = games.find(game => game.id === parseInt(request.params.id));

  if (!game)
    return response.status(404).send("The game with the id not found!");

  response.send(game);
});

router.post("/", (request, response) => {
  const { error } = validateGame(request.body);

  if (error) return response.status(400).send(error.details[0].message);

  const game = {
    id: games.length + 1,
    name: request.body.name
  };

  games.push(game);
  response.send(games);
});

router.put("/:id", (request, response) => {
  const game = games.find(game => game.id === parseInt(request.params.id));

  if (game === undefined)
    return response.status(404).send("The game with the given ID not found!");

  game.name = request.body.name;
  response.send(game);
});

router.delete("/:id", (request, response) => {
  const game = games.find(game => game.id === parseInt(request.params.id));

  if (game === undefined)
    return response.status(404).send("The game with the given ID not found!");

  const gameIndex = games.indexOf(game);
  games.splice(gameIndex, 1);

  response.send(game);
});

function validateGame(game) {
  const schema = {
    id: Joi.number().greater(0),
    name: Joi.string()
      .min(3)
      .required()
  };

  return Joi.validate(game, schema);
}

module.exports = router;
