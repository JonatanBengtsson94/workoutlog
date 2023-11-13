require("dotenv").config()
const express = require("express")
const cors = require("cors")
const session = require("express-session")
const passport = require("passport")
const { pool } = require("./config/db")
const exercises = require("./routes/exercises")
const sets = require("./routes/sets")
const workouts = require("./routes/workouts")
const register = require("./routes/register")


const app = express()

app.use(cors())
app.use(express.json())
app.use(session({
    store: new (require("connect-pg-simple")(session))({
        pool: pool,
        createTableIfMissing: true
    }),
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

// Passport auth
require("./config/passport")
app.use(passport.initialize())
app.use(passport.session())

// Routes
app.use("/register", register)

// Exercises
app.use("/api/v1/exercises", exercises)

// Sets
app.use("/api/v1/sets", passport.authenticate("local"), sets)

// Workouts
app.use("/api/v1/workouts", workouts)

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is listening to port ${port}`)
})