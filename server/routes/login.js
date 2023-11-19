const express = require("express")
const router = express.Router()
const passport = require("passport")
const { logIn, checkLogIn } = require("../controllers/users")
const { isAuth } = require("../middleware/authentication")

router.route("/").get(isAuth, checkLogIn).post(passport.authenticate("local"), logIn)

module.exports = router