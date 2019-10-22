const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config/secret");

function checkAuth(request, response, next) {
  // Check token from request header
  const token = request.header("x-jwt-token");

  // If token not exist, send 401 status code, restrict non-users
  if (!token) return response.status(401).send("You are not authorized!");

  try {
    // Verify if token is valid
    const decoded = jwt.verify(token, JWT_SECRET);
    // If valid assign decoded payload to request.user
    request.user = decoded;
    next();
  } catch (exception) {
    // If not valid, jwt verify will throw an exception
    response.status(400).send("Invalid token.");
  }
}

module.exports = { checkAuth };
