const passport = require("passport")
const pool = require("./db")
const LocalStrategy = require("passport-local").Strategy
const { validatePassword } = require("../lib/passwordUtils")

passport.use(new LocalStrategy(
    (username, password, done) => {
        results = pool.query("SELECT * FROM users WHERE username = $1", [username])
        if (results.rows.length != 1) { return done(null, false) }
    
        const isValid = validatePassword(password, user.hash, user.salt)
    
        if (isValid) {
            return done(null, user)
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