function logger(request, response, next) {
  console.log(`${request.method} ${request.url} ${response.statusCode}`);
  next();
}

module.exports = logger;