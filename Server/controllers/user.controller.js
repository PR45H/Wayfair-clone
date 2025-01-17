const userModel = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const jwt_secret_key = process.env.JWT_SECRET_KEY
// Register user
// 1. get user data from req.body
// 2. check if user already exists
// 3. if user exists, return error
// 4. if user does not exist, create user
// 5. bcrypt the password
// 6. return success message
const register= async (req,res) => {
    try {
        const { firstName, lastName, email, password, mobile } = req.body
        const user_exists = await userModel.findOne({ email: email })
        // check user
        if (user_exists) {
            return res.status(400).json({message: "User already exists!"})
        }
        // hash password
        const hashed_password = await bcrypt.hash(password, 5)

        // create user
        const new_user = new userModel({ firstName, lastName, email, password: hashed_password, mobile })
        await new_user.save()
        return res.status(201).json({message: "User created successfully!"})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

// login user
// 1. get user data from req.body
// 2. check if user exists
// 3. if user does not exist, return error
// 4. if user exists, check if password is correct
// 5. if password is incorrect, return error
// 6. if password is correct, create token and return token in header
const login = async (req,res) => {
    try {
        const { email, password } = req.body
        // check user
        const user = await userModel.findOne({ email: email })
        if (!user) {
            return res.status(400).json({message: "User does not exist!"})
        }
        // check password
        const is_password_valid = await bcrypt.compare(password, user.password)
        if (!is_password_valid) {
            return res.status(401).json({message: "Password is incorrect!"})
        }
        // create token
        const token = jwt.sign({ id: user._id, name: user.firstName }, jwt_secret_key)
        return res.status(200).json({message: "Login successful!", token: token})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

module.exports = {register, login}