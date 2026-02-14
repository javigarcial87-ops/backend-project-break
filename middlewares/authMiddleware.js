const requireAuth = (req, res, next) => {
    if(!req.session.usr) {
        return res.redirect("/login")
    }
    next()
}


module.exports = requireAuth