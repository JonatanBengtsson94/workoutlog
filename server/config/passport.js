const passport = require("passport")
const pool = require("./db")
const LocalStrategy = require("passport-local").Strategy
const bcrypt = require("bcrypt")




const verifyCallback = (username, password, done) => {
    results = pool.query("SELECT * FROM users WHERE username = $1", [username])
    if (results.rows.length != 1) { return done(null, false) }

    const isValid = validPassport(password, user.hash, user.salt)

    if (isValid) {
        return done(null, user)
    } else {
        return done(null, false)
    }
}


//passport.use(new LocalStrategy(), authUser)
//
//passport.serializeUser((user, done) => done(null, user_id))
//
//passport.deserializeUser((user_id, done) => {
//    pool.query("SELECT * FROM users WHERE user_id = $1", [user_id])
//    return done(null, results.rows[0])
//})