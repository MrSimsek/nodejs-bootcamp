console.log("Before");

getUser(1, function(user) {
  getPhotos(user, function(photos) {
    getComments(photo[0], function(comments) {
      console.log(comments);
    });
  });
});

console.log("After");

function getUser(id, patates) {
  setTimeout(() => {
    console.log("Readig a database...");
    patates({ id: id, username: "mrsimsek" });
  }, 2000);
}

function getPhotos(user, callback) {
  setTimeout(() => {
    console.log("Getting user photos from database...");
    callback(["Photo 1", "Photo 2"]);
  }, 2000);
}

function getComments(photo, callback) {
  setTimeout(() => {
    console.log("Getting user photos from database...");
    callback(["Comment 1", "Comment 2"]);
  }, 2000);
}
