const fs = require("fs");

console.log(`Directory of the current file ${__dirname}`);
console.log(`Name of the current file ${__filename}`);

// Read a file SYNCHRONOUSLY
const fileContentSync = fs.readFileSync("./note.txt", "utf-8");
console.log(`SYNC: ${fileContentSync}`);

// Read a file ASYNCHRONOUSLY
fs.readFile("./note.txt", "utf-8", (err, fileContentAsync) => {
  // If there is an error stop the execution of the function
  if (err) return console.log("There is an error");

  console.log(`ASYNC: ${fileContentAsync}`);
});

// Write to a file SYNCHRONOUSLY
fs.writeFileSync("./notes-1.txt", "This is a note112e12!", "utf-8");

// Write a file ASYNCHRONOUSLY
fs.writeFile("./notes-1.txt", "This is a note112e12!", "utf-8", err => {
  if (!err) console.log("File saved!");
});

// Read ASYNC spacex.json
fs.readFile("./spacex.json", "utf-8", (err, data) => console.log(data));

console.log("END OF FILE!");

// GET     /api/users          // get all users data
// POST    /api/users          // create new user
// PUT     /api/users          // modify existing user
// DELETE  /api/users/${email} // delete user with email
