const mongoose = require('mongoose')
const db_url = process.env.URI

mongoose.connect(db_url).then(() => {
    console.log("connected to database")
})
.catch((err) => {
    console.log(err)
})