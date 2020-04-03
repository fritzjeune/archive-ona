// jshint esversion:9

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    user: {
        type: String,
        unique: true,
        maxlength: [15, 'user cannot have more than 15 caracters'],
        trim: true
    },
    password: {
        type: String,
        minlength: [8, 'password must have 8 caracters or more'],
        trim: true,
    },
    surname: String,
    lastname: String
}, {
    timestamps: true
});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);