const express = require("express")
const router = express.Router()
const { getAllSets, getSetsInWorkout, createSet } = require("../controllers/sets")
const passport = require("passport")

router.route("/").get(getAllSets, passport.authenticate("local")).post(createSet)
router.route("/:id").get(getSetsInWorkout)

module.exports = router