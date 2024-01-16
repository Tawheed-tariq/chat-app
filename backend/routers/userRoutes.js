const { register, login, allUsers } = require('../controllers/userControllers')

const userRouter = require('express').Router()



userRouter.post('/register' , register)
userRouter.post('/login', login)
userRouter.get('/allusers/:id', allUsers)





module.exports = userRouter