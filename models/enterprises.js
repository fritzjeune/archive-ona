// jshint esversion:9
const mongoose = require('mongoose');

const EnterpriseSchema = new mongoose.Schema({
    businessName: {
        type: String,
        unique: true,
        required: [true, 'Please enter the business Name']
    },
    idNumber: {
        type: Number,
        unique: true,
        required: [true, 'Please enter the business Id']
    },
    businessType: String,
    businessCategory: String,
    createdAt: Date,
    socialAdress: {
        city: String,
        province: String,
        state: String,
        country: String,
        street: String,
        },
    employees: {
        type: mongoose.Schema.ObjectId,
        ref: 'Assurees',
        required: false
    }

});

module.exports = mongoose.model('Enterprise', EnterpriseSchema);