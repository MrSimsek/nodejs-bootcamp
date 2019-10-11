const express = require("express");
const app = express();

const blogRoutes = require("./routes/blog");

app.set("view engine", "ejs");
app.use(express.urlencoded());

app.use("/blog", blogRoutes);

app.get("/", (request, response) =>
  response.render("master", { content: "home", title: "Home Page" })
);

app.get("/about", (request, response) =>
  response.render("master", { content: "about", title: "About Page" })
);

app.get("/contact", (request, response) =>
  response.render("master", { content: "contact", title: "Contact Page" })
);

const comments = [];

app.post("/form", (request, response) => {
  console.log(request.body);
  comments.push(request.body);

  response.send(`Thank you for your comment, ${request.body.firstname}...`);
});

app.listen(3000, () => console.log("Server is listening on PORT: 3000..."));
