const { pool } = require("../config/db")

const getAllExercises = async (req, res) => {
    try {
        const results = await pool.query("SELECT * FROM exercises")
        res.status(200).json({
            status: "sucess",
            results: results.rows.length,
            data: {
                exercises: results.rows
            }
        })
    } catch (err) {
        res.status(500).json({
            status: "failure"
        })
    }
}

const getSingleExercise =  async (req, res) => {
    try {
        const results = await pool.query("SELECT * FROM exercises WHERE exercise_id = $1", [req.params.id])
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
    getAllExercises,
    getSingleExercise
}