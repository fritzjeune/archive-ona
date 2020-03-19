// jshint esversion:9

const mongoose = require('mongoose');

const FamilySchema = new mongoose.Schema({
    assuree: {
        type: mongoose.Schema.ObjectId,
        ref: 'Assuree',
        required: true
    },
    lastName: String,
    surname: String,
    birthday: Date,
    relation: String,
    alive: Boolean,
    deathDate: Date   
});


module.exports = mongoose.model('Family', FamilySchema);


