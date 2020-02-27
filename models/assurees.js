//jshint esversion:9

const mongoose = require('mongoose');

const AssureeSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'please add the assuree name'],
        unique: false,
        trim: true

    }
});