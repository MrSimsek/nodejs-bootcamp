const express = require("express");
const app = express();

app.use(express.urlencoded());

let games = [
  { id: 1, name: "God of War" },
  { id: 2, name: "Spiderman" },
  { id: 3, name: "Skyrim" }
];

app.get("/", (request, response) => response.send("<h1>Method: GET</h1>"));
app.post("/", (request, response) => response.send("<h1>Method: POST</h1>"));
app.put("/", (request, response) => response.send("<h1>Method: PUT</h1>"));
app.delete("/", (request, response) =>
  response.send("<h1>Method: DELETE</h1>")
);

app.get("/api/games", (request, response) => response.send(games));

app.get("/api/games/:id", (request, response) => {
  const game = games.find(game => game.id === parseInt(request.params.id));

  if (!game)
    return response.status(404).send("The game with the id not found!");
  response.send(game);
});

app.post("/api/games", (request, response) => {
  const game = {
    id: games.length + 1,
    name: request.body.name
  };
  games.push(game);
  response.send(games);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}...`));
