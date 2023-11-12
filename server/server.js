require("dotenv").config()
const express = require("express")
const cors = require("cors")
const session = require("express-session")
const pg = require("pg")
const exercises = require("./routes/exercises")
const sets = require("./routes/sets")
const workouts = require("./routes/workouts")

const pgPool = new pg.Pool()
const app = express()

app.use(cors())
app.use(express.json())
app.use(session({
    store: new (require("connect-pg-simple")(session))({
        pool: pgPool,
        createTableIfMissing: true
    }),
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

// Exercises
app.use("/api/v1/exercises", exercises)

// Sets
app.use("/api/v1/sets", sets)

// Workouts
app.use("/api/v1/workouts", workouts)

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is listening to port ${port}`)
})