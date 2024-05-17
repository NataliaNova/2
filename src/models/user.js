const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true
    }
})

/* const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String
    },
    address: {
        type: String
    },
    card: {
        type: String
    },
    married_status: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
}); */

module.exports = mongoose.model('User', userSchema);