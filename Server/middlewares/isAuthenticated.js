const jwt = require('jsonwebtoken');
const jwt_secret_key = process.env.JWT_SECRET_KEY

const isAuthenticated = (req, res, next) => {
    // first receive the token from the headers
    // second verify the token
    // third if the token is verified then take the user id from the token and find the user from the database
    // and attach the name to change the login to username
    try {
        const token = req.headers.authorization;
        const verified_token = jwt.verify(token, jwt_secret_key);
    
        if(!verified_token){
            return res.status(401).json({message: "Unauthorized access"});
        }else{
            req.user = verified_token;
            next();
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal server error"});
    }
    
};

module.exports = isAuthenticated;