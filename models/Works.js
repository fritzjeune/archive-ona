// jshint esversion:9

const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({
    enterpriseName: {
        type: String,
        required: [true, 'Please enter the business Name']
    },
    identificationNumber: {
        type: Number,
        required: [true, 'Please enter the business Id']
    },
    role: String,
    startDate: Date,
    endDate: Date,
    firstOnaPayment: Date,
    lastOnaPayment: Date,
    salary: Number
});

module.exports = mongoose.model('Work', workSchema);