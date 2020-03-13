// jshint esversion:9

const mongoose = require('mongoose');

const ParentSchema = new mongoose.Schema({
    relation: String,
    lastName: String,
    firstName: String,
    birthday: Date,
    alive: Boolean,
    deathDate: Date   
});


module.exports = mongoose.model('Parent', ParentSchema);


