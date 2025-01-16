const mongoose = require('mongoose')
require('dotenv').config()
const db_url = process.env.MONGO_URI
// console.log(db_url) - debbuging

const connection = async () => {
    try {
        await mongoose.connect(db_url);
        console.log("Connected to Database")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connection