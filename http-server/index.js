const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.write("Home");
    response.end();
  }

  if (request.url === "/about") {
    const aboutPage = fs.readFileSync("./about.html");
    response.write(aboutPage);
    response.end();
  }

  if (request.url === "/contact") {
    response.write("Contact Page");
    response.end();
  }

  if (request.url === "/api/games") {
    response.write(JSON.stringify(["God of War", "Spiderman", "Skyrim"]));
    response.end();
  }
});

server.listen(3000, () => console.log(`Server listening on PORT: 3000`));
