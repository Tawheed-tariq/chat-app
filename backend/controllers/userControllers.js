const user = require('../models/userModel')
const bcrypt = require('bcrypt')


module.exports.register = async (req, res, next) => {
    try {
        const {username, email , password} = req.body
        
        const checkUsername = await user.findOne({username})
        if(checkUsername){
            return res.json({
                msg: "Username already exists",
                status: false
            })
        }

        const checkEmail = await user.findOne({email})
        if(checkEmail){
            return res.json({
                msg: "Email already exists",
                status: false
            })
        }

        const hashedPassword = await bcrypt.hash(password, 5)
        const info = await user.create({
            email,
            username,
            password: hashedPassword
        })

        delete info.password

        return res.json({
            status: true,
            info
        })
    } catch (error) {
        next(error)
    }
}


module.exports.login = async (req, res, next) => {
    try {
        const {username,password} = req.body
        
        const myUser = await user.findOne({username})
        if(!myUser){
            return res.json({
                msg: "Incorrect usename or password",
                status: false
            })
        }

        const checkPassword = await bcrypt.compare(password, myUser.password)
        if(!checkPassword){
            return res.json({
                msg: "Incorrect usename or password",
                status: false
            })
        }

        delete myUser.password

        return res.json({
            status: true,
            myUser
        })
    } catch (error) {
        next(error)
    }
}

module.exports.allUsers = async (req, res, next) => {
    try {
        const userID = req.params.id
        const users = await user.find({_id : {$ne : userID}}).select([
            "email",
            "username",
            "_id"
        ])
        return res.json(users)
    } catch (error) {
        next(error)
    }
}

module.exports.logout = async (req,res,next) => {
    try {
        const id = req.params.id
        if(!id){
            return res.json({msg : "please provide id"})
        }
        onlineUsers.delete(id)
        return res.status(200).send() 
    } catch (error) {
        next(error)
    }
}