function isOwner(req, res, next) {
    if(Object.keys(req.params).length === 0) {
        next()
        return
    }
    if(req.user.user_id === req.params.id) {
        next()
    } else {
        res.status(403).json({ msg: "Unauthorized" })
    }
}

module.exports = { isOwner }