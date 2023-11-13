const express = require("express")
const { genPassword } = require("../lib/passwordUtils")
const { pool } = require("../config/db")
const router = express.Router()

const registerNewUser = async (req, res) => {
    const saltHash = genPassword(req.body.password)

    const salt = saltHash.salt
    const hash = saltHash.hash

    const results = await pool.query("INSERT INTO users(username, hash, salt) VALUES($1, $2, $3)", [req.body.username, hash, salt])

}

router.route("/").post(registerNewUser)

module.exports = router