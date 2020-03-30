// jshint esversion:9

const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({
    assuree: {
        type: mongoose.Schema.ObjectId,
        ref: 'Assuree',
        required: true
    },
    assureeNif: String,
    enterprise: {
        type: mongoose.Schema.ObjectId,
        ref: 'Enterprise',
        required: true
    },
    role: String,
    startDate: Date,
    endDate: {
        type: Date,
        default: null
    },
    firstOnaPayment: Date,
    lastOnaPayment:  {
        type: Date,
        default: null
    },
    salary: Number
});


module.exports = mongoose.model('Work', workSchema);