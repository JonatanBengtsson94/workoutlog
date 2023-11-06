require("dotenv").config()
const express = require("express")
const db = require("./db")

const app = express()

app.use(express.json())

// Get exercises
app.get("/api/v1/exercises", async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM exercises")
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

})

// Get one exericise
app.get("/api/v1/exercises/:id", async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM exercises WHERE exercise_id = $1", [req.params.id])
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

// Get sets
app.get("/api/v1/sets", async (req, res) => {
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
})

// Create new set
app.post("/api/v1/sets/", async (req, res) => {
    try {
        const result = await db.query("INSERT INTO sets(reps, exercise_id) VALUES($1, $2) returning *", [req.body.reps, req.body.exercise_id])
        res.status(201).json({
            status: "sucess",
            exercise: results.rows[0]
        })
    } catch (err) {
        res.status(500).json({
            status: "failure"
        })
    }
})

// Get workout
// Create workout
// Create new user
// Get user

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is listening to port ${port}`)
})