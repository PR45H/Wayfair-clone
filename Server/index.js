const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.port
const connection = require('./config/db.js')
const cors = require('cors')
const userRouter = require('./routes/user.route.js')
const productRouter = require('./routes/product.route.js')

// middleware
app.use(express.json())
app.use(cors())

// routes
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)



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