// jshint esversion:9

const mongoose = require('mongoose');

const BarentSchema = new mongoose.Schema({
    relation: String,
    lastName: String,
    firstName: String,
    birthday: Date,
    alive: Boolean,
    deathDate: Date   
});


module.exports = mongoose.model('Parent', ParentSchema);


