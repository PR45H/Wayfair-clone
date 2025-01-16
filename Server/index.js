const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.port
const connection = require('./config/db.js')



// Health check
app.get('/', (req, res) => {
    res.json({
        message: "Server running"
    })
})

app.listen(port, async () => {
    await connection()
    console.log(`server running on port: ${port}`)
})