const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved!");
    reject(new Error("Network failed."));
  }, 2000);
});

p.then(result => console.log("Result:", result)).catch(err =>
  console.log("Error:", err.message)
);

