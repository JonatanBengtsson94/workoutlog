require("dotenv").config()
const express = require("express")
const cors = require("cors")
const exercises = require("./routes/exercises")
const sets = require("./routes/sets")

const app = express()

app.use(cors())
app.use(express.json())


// Exercises
app.use("/api/v1/exercises", exercises)

// Get sets
app.use("/api/v1/sets", sets)

// Get all workouts
app.get("/api/v1/workouts", async (req, res) => {
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
})

// Get one workout
app.get("/api/v1/workouts/:id", async (req, res) => {
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
})

// Create workout
// Create new user
// Get user

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is listening to port ${port}`)
})