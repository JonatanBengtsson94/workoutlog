const { pool } = require("../config/db")

const getAllWorkouts = async (req, res) => {
    try {
        let query = "SELECT * FROM workouts"
        let values = []
        if (req.query.from_date) {
            query += " WHERE date > $1"
            values.push(req.query.from_date)
        }
        const results = await pool.query(query, values)
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
        const results = await pool.query(
            "SELECT exercises.name AS exercise, sets.weight AS weight, sets.reps AS reps, bodyparts.name AS bodypart\
            FROM sets INNER JOIN workouts ON sets.workout_id = workouts.workout_id\
            INNER JOIN exercises ON sets.exercise_id = exercises.exercise_id\
            INNER JOIN bodyparts ON exercises.bodypart_id = bodyparts.bodypart_id WHERE workouts.workout_id = $1"
            ,[req.params.id])
        res.status(200).json({
            status: "sucess",
            sets: results.rows
        })
    } catch (err) {
        res.status(500).json({
            status: "failure"
        })
    }
}

const createWorkout = async (req, res) => {
    try {
        const results = await pool.query(
            "INSERT INTO workouts(date, user_id) VALUES($1, $2) returning *", [req.body.date, req.user.user_id]
        )
        res.status(201).json({
            status: "sucess",
            workout: results.rows[0]
        })
    } catch (err) {
        res.status(500).json({
            status: "failure"
        })
    }
}

module.exports = {
    getAllWorkouts,
    getSingleWorkout,
    createWorkout
}