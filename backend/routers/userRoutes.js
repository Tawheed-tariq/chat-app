const { register, login, allUsers, logout, editProfile } = require('../controllers/userControllers')

const userRouter = require('express').Router()



userRouter.post('/register' , register)
userRouter.post('/login', login)
userRouter.get('/allusers/:id', allUsers)
userRouter.get('/logout/:id', logout)
userRouter.put('/editProfile/:id', editProfile)



module.exports = userRouter