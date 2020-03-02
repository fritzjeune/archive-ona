// jshint esversion:9

const mongoose = require('mongoose');

const famMemberSchema = new mongoose.Schema({
    relation: String,
    lastName: String,
    firstName: String,
    birthday: Date,
    alive: Boolean,
    deathDate: Date   
});


module.exports = famMemberSchema;


const presentWorks = new mongoose.Schema({
    businessName: String,
    identificationNumber: Number,
    businessType: String,
    businessCategory: String,
    createdAt: Date,
    street: String,
    city: String,
    province: String,
    state: String,
    country: String,
});

module.exports = presentWorks;