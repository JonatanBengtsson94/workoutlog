const passport = require("passport")
const pool = require("./db")
const LocalStrategy = require("passport-local").Strategy
const bcrypt = require("bcrypt")

const authUser = (username, password, done) => {
    results = pool.query("SELECT * FROM users WHERE username = $1", [username])
    if (results.rows.length > 0) {
        const user = results.rows[0]
    }
}

const initialize = (passport) => {
    passport.use(new LocalStrategy(), authUser)
}
