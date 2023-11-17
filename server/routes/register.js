const express = require("express")
const router = express.Router()
const { createNewUser } = require("../controllers/users")

router.route("/").post(createNewUser)

module.exports = router