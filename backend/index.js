require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const cors = require('cors')
const userRouter = require('./routers/userRoutes')
require('./db/connection')

/* Cross-origin resource sharing (CORS) is an extension of the 
same-origin policy. You need it for authorized resource sharing 
with external third parties. For example, you need CORS when you 
want to pull data from external APIs that are public or authorized.*/

app.use(cors())
app.use(express.json())


app.use('/api/auth/' , userRouter)

app.listen(port , (err) => {
    if(err)
        console.log(err.message)
    console.log("server running on port " + port)
})