const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },

    wins: {
        type: Number,
        default: 0
    },

    losses: {
        type: Number,
        default: 0
    },
})

const User = mongoose.model('User', UserSchema);

module.exports = User;