require("dotenv").config()
const express = require("express")

const app = express()

app.use(express.json())

// Get exercises
app.get("/api/v1/exercises", (req, res) => {
    res.status(200).json({})
})

// Get one exericise
app.get("/api/v1/exercises/:id", (req, res) => {
    res.status(200).json({})
    console.log(req.params.id)
})

// Create new user
app.post("/api/v1/users", (req, res) => {
    console.log(req.body)
})

// Get user
app.get("/api/v1/users/:id", (req, res) => {
    console.log(req.params.id)
})

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server is listening to port ${port}`)
})