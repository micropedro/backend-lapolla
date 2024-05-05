const mongoose = require('mongoose');

const { Schema } = mongoose;

const Deposit = new Schema({
    userId: Schema.Types.ObjectId,
    adminMethodId:Schema.Types.ObjectId,
    operationRef: {
        type: String,
        required: true
    },
    amount:{
        type:Number,
        required: true
    },
    status:{
        type:Number,
        default:0
    },
    date: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('Deposit', Deposit);