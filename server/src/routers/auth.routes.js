const express = require('express')
const authRouter = express.Router()
const authController = require('../controllers/auth.controller')
const { checkIsEmpty, findByEmail, validateLogin } = require('../middleware/auth.middleware')

authRouter.post('/register', checkIsEmpty, findByEmail, authController.register)
authRouter.post('/login', validateLogin, authController.login)

module.exports = authRouter;
