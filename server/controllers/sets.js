const db = require("../config/db")

const getAllSets = async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM sets")
        res.status(200).json({
            status: "sucess",
            results: results.rows.length,
            data: {
                sets: results.rows
            }
        })
    } catch (err) {
        res.status(500).json({
            status: "failure"
        })
    }
}

const getSetsInWorkout = async (req, res) => {
    try {
        const results = await db.query(
            "SELECT * FROM sets WHERE workout_id = $1", [req.params.id])
        res.status(200).json({
            status: "sucess",
            results: results.rows.length,
            data: {
                sets: results.rows
            }
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            status: "failure"
        })
    }
}


const createSet = async (req, res) => {
    try {
        const results = await db.query(
            "INSERT INTO sets(reps, exercise_id, workout_id, weight) VALUES($1, $2, $3, $4) returning *",
            [req.body.reps, req.body.exercise_id, req.body.workout_id, req.body.weight]
        )
        res.status(201).json({
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
    getAllSets,
    getSetsInWorkout,
    createSet
}