function isAuth(req, res, next) {
    if (req.isAuthenticated()) {
        next()
    } else {
        console.log(req.headers)
        res.status(401).json({ msg: "Unauthorized" })
    }
}

module.exports = { isAuth }