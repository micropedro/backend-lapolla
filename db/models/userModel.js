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
        default: 5
    },
    date: {
        type: Date,
        default: Date.now
    },
    grupero: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        default:"000000000000000000000000"
    },
    admin: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        default:"000000000000000000000000"
    },
    percent: {
        type: Number,
        default: 0
    },
    balance: {
        type: Number,
        default: 0
    },
    block: {
        type: Boolean,
        default: false
    },
    deleted:{
        type: Boolean,
        defalut:false
    },
    prepaid:{
       type: Boolean,
       default:true 
    }
})

module.exports = mongoose.model('User', User)