// console.log("Before");

// getUser(1)
//   .then(user => {
//     if (false) {
//       return getPhotos(user);
//     }
//     return Promise.reject("User is not gold!");
//   })
//   .then(photos => getComments(photos))
//   .then(comments => console.log(comments))
//   .catch(err => console.log(err))
//   .finally(() => console.log("Finish reading db..."));

// console.log("After");

// function getUser(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Readig a database...");
//       resolve({ id: id, username: "mrsimsek" });
//     }, 2000);
//   });
// }

// function getPhotos(user) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Getting user photos from database...");
//       resolve(["Photo 1", "Photo 2"]);
//     }, 2000);
//   });
// }

// function getComments(photo) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Getting comments of the photo from database...");
//       resolve(["Comment 1", "Comment 2"]);
//     }, 2000);
//   });
// }