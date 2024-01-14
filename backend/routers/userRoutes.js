const { register } = require('../controllers/userControllers')

const userRouter = require('express').Router()

userRouter.post('/register' , register)

module.exports = userRouter