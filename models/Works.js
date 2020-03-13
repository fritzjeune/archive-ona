// jshint esversion:9

const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({
    assuree: {
        type: mongoose.Schema.ObjectId,
        ref: 'Assuree',
        required: true
    },
    enterpriseName: {
        type: String,
        required: [true, 'Please enter the business Name']
    },
    enterprise: {
        type: mongoose.Schema.ObjectId,
        ref: 'Enterprise',
        required: true
    },
    role: String,
    startDate: Date,
    endDate: {
        type: Date,
        default: Date.now
    },
    firstOnaPayment: Date,
    lastOnaPayment:  {
        type: Date,
        default: Date.now
    },
    salary: Number
});

module.exports = mongoose.model('Work', workSchema);