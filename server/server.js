require("dotenv").config()
const express = require("express")
const cors = require("cors")
const session = require("express-session")
const passport = require("passport")
const { pool } = require("./config/db")
const { isAuth } = require("./middleware/authentication")
const { isOwner } = require("./middleware/authorization")
const exercises = require("./routes/exercises")
const sets = require("./routes/sets")
const workouts = require("./routes/workouts")
const register = require("./routes/register")
const login = require("./routes/login")


const app = express()

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

app.use(express.json())
app.use(session({
    store: new (require("connect-pg-simple")(session))({
        pool: pool,
        createTableIfMissing: true
    }),
    secret: "secret",
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

// Users
app.use("/api/v1/login", login)
app.use("/api/v1/register", register)

// Exercises
app.use("/api/v1/exercises", exercises)

app.use(isAuth)
app.use(isOwner)

// Sets
app.use("/api/v1/sets", sets)

// Workouts
app.use("/api/v1/workouts", workouts)

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is listening to port ${port}`)
})