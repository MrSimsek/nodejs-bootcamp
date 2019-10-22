function checkAdmin(request, response, next) {
  const user = request.user;

  // 401 Unathorized
  // 403 Forbidden

  if (!user.isAdmin)
    return response.status(403).send("You need to be an admin!");

  next();
}

module.exports = { checkAdmin };
