require("dotenv").config()
const express = require("express")
const cors = require("cors")
const exercises = require("./routes/exercises")
const sets = require("./routes/sets")
const workouts = require("./routes/workouts")

const app = express()

app.use(cors())
app.use(express.json())


// Exercises
app.use("/api/v1/exercises", exercises)

// Sets
app.use("/api/v1/sets", sets)

// Workouts
app.use("/api/v1/workouts", workouts)

// Create workout
// Create new user
// Get user

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is listening to port ${port}`)
})