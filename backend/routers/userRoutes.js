const { register, login, allUsers, logout } = require('../controllers/userControllers')

const userRouter = require('express').Router()



userRouter.post('/register' , register)
userRouter.post('/login', login)
userRouter.get('/allusers/:id', allUsers)
userRouter.get('/logout/:id', logout)




module.exports = userRouter