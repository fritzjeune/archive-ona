// jshint esversion:9

const mongoose = require('mongoose');
const Assuree = require('./Assurees');
const Enterprise = require('./Enterprises');

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
    enterpriseNif: String,
    role: String,
    startDate: Date,
    endDate: {
        type: Date,
        default: null
    },
    firstOnaPayment: Date,
    lastOnaPayment: {
        type: Date,
        default: null
    },
    salary: Number
});

workSchema.post('save', async function(doc, next) {

    // const enterprise = doc.enterprise;

    const assuree = await Assuree.findById(doc.assuree);
    const enterprise = await Enterprise.findById(doc.enterprise);
    console.log(enterprise._id);
    assuree.enterprise.push(enterprise);
    await assuree.save();

    next();



});


module.exports = mongoose.model('Work', workSchema);