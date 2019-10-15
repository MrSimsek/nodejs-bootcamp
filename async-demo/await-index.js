console.log("Before");

async function displayComments() {
  try {
    // Getting resolved promisses
    const user = await getUser(1);
    const photos = await getPhotos(user);
    const comments = await getComments(photos[0]);

    console.log(comments);
  } catch (error) {
    // If an error occurs in the try block.
    console.log(error);
  } finally {
    // Execute code, after try and catch, regardless of the result.
    console.log("Finished reading database...");
  }
}

displayComments();

console.log("After");

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Readig a database...");
      resolve({ id: id, username: "mrsimsek" });
    }, 2000);
  });
}

function getPhotos(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting user photos from database...");
      resolve(["Photo 1", "Photo 2"]);
    }, 2000);
  });
}

function getComments(photo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting comments of the photo from database...");
      resolve(["Comment 1", "Comment 2"]);
    }, 2000);
  });
}
