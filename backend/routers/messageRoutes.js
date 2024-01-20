const {addMsg , getMsg} = require('../controllers/msgController') 

const messageRoute = require('express').Router()

messageRoute.post('/addmsg', addMsg)
messageRoute.post('/getmsg', getMsg)

module.exports = messageRoute