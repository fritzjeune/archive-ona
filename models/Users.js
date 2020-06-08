// jshint esversion:9

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true, 
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
        required: true, 
        minlength: [8, 'password must have 8 caracters or more'],
        trim: true,
    },
    surname: String,
    lastname: String
}, {
    timestamps: true
});

UserSchema.pre('save', function(next) {
    let user = this;
    
    if (user.isModified('password')) {
        bcrypt.genSalt(10, (err, salt) => {
            console.log(salt);
            if (err) return next(err);
    
            bcrypt.hash(user.password, salt , (err, hash) => {
                if(err) return next(err);
                console.log(hash);
                user.password = hash;
                next();
            });
        }); 
    } else {
        next();
    }
    
});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);