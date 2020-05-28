// jshint esversion:9

const mongoose = require('mongoose');

const ComptindiDemandeSchema = new mongoose.Schema({
    assuree: {
        type: mongoose.Schema.ObjectId,
        ref: 'Assuree',
        required: true
    },
    matricule: String,
    assureeNif: String,
    lastName: String,
    surname: String,
    birthday: Date,
    enterprise: {
        type: mongoose.Schema.ObjectId,
        ref: 'Enterprise',
        required: true
    },
    phone: String,
    accountBookMatriculated: String,
    accountBookNonMatriculated: String,
}, {
    timestamps: true
});


module.exports = mongoose.model('ComptindiDemandeSchema', ComptindiDemandeSchema);