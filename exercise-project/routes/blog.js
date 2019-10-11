const express = require("express");
const router = express.Router();
const path = require("path");

const blogposts = [
  {
    url: "hello-world",
    title: "Hello World",
    content: "THis is a hello world blog post."
  },
  {
    url: "my-second-post",
    title: "My Second Post",
    content: "This is another blog post."
  }
];

router.get("/", (request, response) => {
  response.render("master", {
    title: "Blog Page",
    content: "blog",
    blogposts: blogposts
  });
});

router.get("/:postID", (request, response) => {
  const blogpost = blogposts.find(
    blogpost => blogpost.url === request.params.postID
  );

  if (!blogpost)
    return response
      .status(404)
      .sendFile(path.join(__dirname, "public/404.html"));

  response.render("master", {
    title: blogpost.title,
    content: "post",
    blogpost: blogpost
  });
});

module.exports = router;
