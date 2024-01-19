const mongoose = require('mongoose')

const messagesSchema = new mongoose.Schema({
    message: {
        text: {
            type : String,
            required: true
        }
    },
    users: Array,
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "user"
    }
},
{
    timestamps: true
}
)

module.exports = mongoose.model('message', messagesSchema)