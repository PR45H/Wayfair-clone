const userRouter = require('express').Router();
const userController = require('../controllers/user.controller');

userRouter.post('/register', userController.register);
userRouter.post('/login', userController.login);

module.exports = userRouter;
