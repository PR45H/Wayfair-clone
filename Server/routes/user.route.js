const userRouter = require('express').Router();
const userController = require('../controllers/user.controller');
const isAuthenticated = require('../middlewares/isAuthenticated');

userRouter.post('/register', userController.register);
userRouter.post('/login', userController.login);
userRouter.get('/me', isAuthenticated, userController.getMe);

module.exports = userRouter;
