const express = require("express")
const router = express.Router()
const { getAllSets, getSetsInWorkout, createSet } = require("../controllers/sets")

router.route("/").get(getAllSets).post(createSet)
router.route("/:id").get(getSetsInWorkout)

module.exports = router