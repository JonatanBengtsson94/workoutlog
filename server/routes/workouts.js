const express = require("express")
const router = express.Router()
const { getAllWorkouts, getSingleWorkout, createWorkout} = require("../controllers/workouts")


router.route("/").get(getAllWorkouts).post(createWorkout)
router.route("/:id").get(getSingleWorkout)

module.exports = router