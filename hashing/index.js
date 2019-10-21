const bcrypt = require("bcrypt");

async function generateHashedPassword(password) {
  const salt = await bcrypt.genSalt();
  const hashed = await bcrypt.hash(password, salt);

  return hashed;
}

async function checkPassword() {
  const hashedPassword = await generateHashedPassword("12345");
  const checked = await bcrypt.compare("12345", hashedPassword);

  if (checked) {
    console.log("Password is valid");
  } else {
    console.log("Wrong password!");
  }
}

checkPassword();
