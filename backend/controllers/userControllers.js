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