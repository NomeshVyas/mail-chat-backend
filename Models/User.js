const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password : {
        type: String,
        required: true,
        select: false
    },
    mail: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'mail'
        }
    ]
})

module.exports = mongoose.model('user', userSchema)   