const express = require("express")
const router = express.Router()
const { getAllExercises, getSingleExercise } = require("../controllers/exercises")

router.route("/").get(getAllExercises)
router.route("/:id").get(getSingleExercise)

module.exports = router