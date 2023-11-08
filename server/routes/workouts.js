const express = require("express")
const router = express.Router()
const { getAllWorkouts, getSingleWorkout} = require("../controllers/workouts")

router.route("/").get(getAllWorkouts)
router.route("/:id").get(getSingleWorkout)

module.exports = router