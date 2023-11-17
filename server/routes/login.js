const express = require("express")
const router = express.Router()
const { logIn, checkLogIn } = require("../controllers/users")

router.route("/").get(checkLogIn).post(logIn)

module.exports = router