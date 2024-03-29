const mongoose = require('mongoose');

const { Schema } = mongoose;

const User = new Schema({
    name: {
        type: String,
        required: true,
        default: ""
    },
    ci: {
        type: String,
        unique: true,
        required: true,
        default: ""
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    grupero: {
        type: String,
        required: false
    },
    admin: {
        type: String,
        required: true,
        default: ''
    },
    percent: {
        type: Number,
        required: true,
        default: 50
    }
})

module.exports = mongoose.model('User', User);