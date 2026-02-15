const requireAuth = (req, res, next) => {
  console.log("Sesión actual:", req.session);

  if (!req.session.user) {
    return res.redirect("/login");
  }

  next();
};

module.exports = requireAuth;