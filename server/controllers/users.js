const { genPassword } = require("../lib/passwordUtils")
const { pool } = require("../config/db")

const createNewUser = async (req, res) => {
    try {
        const saltHash = genPassword(req.body.password)

        const salt = saltHash.salt
        const hash = saltHash.hash
    
        const results = await pool.query("INSERT INTO users(username, hash, salt) VALUES($1, $2, $3)", [req.body.username, hash, salt])

        res.status(201).json({ status: "success" })
    } catch (err) {
        res.status(500).json({ status: "failure" })
    }
}

const logIn = (req, res) => {
    res.status(200).json({ authenticated: "true" })
}

const checkLogIn = (req, res) => {
    res.status(200).json({ authenticated: "true" })
}

module.exports = {
    createNewUser,
    logIn,
    checkLogIn
}