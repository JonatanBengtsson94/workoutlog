const db = require("../db")

const getAllWorkouts = async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM workouts")
        res.status(200).json({
            status: "sucess",
            results: results.rows.length,
            data: {
                workouts: results.rows
            }
        })
    } catch (err) {
        res.status(500).json({
            status: "failure"
        })
    }
}

const getSingleWorkout = async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM workouts WHERE workout_id = $1", [req.params.id])
        res.status(200).json({
            status: "sucess",
            exercise: results.rows[0]
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            status: "failure"
        })
    }
}

module.exports = {
    getAllWorkouts,
    getSingleWorkout
}