const passport = require("passport")
const { pool } = require("./db")
const LocalStrategy = require("passport-local").Strategy
const { validatePassword } = require("../lib/passwordUtils")

passport.use(new LocalStrategy(
    async (username, password, done) => {
        results = await pool.query("SELECT * FROM users WHERE username = $1", [username])
        if (results.rows.length != 1) { return done(null, false) }
        
        const isValid = validatePassword(password, results.rows[0].hash, results.rows[0].salt)

        if (isValid) {
            return done(null, results.rows[0].userId)
        } else {
            return done(null, false)
        }
    }
))

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((userId, done) => {
    results = pool.query("SELECT user_id FROM users WHERE user_id = $1", [userId])
    if (results.rows.length == 1) { return done(null, user) }
})