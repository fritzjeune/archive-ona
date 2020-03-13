//jshint esversion:9

const mongoose = require('mongoose');


const AssureeSchema = new mongoose.Schema({
    idNumber: {
        type: String,
        required: [true, 'S il vous plait, veuillez ajouter votre CIN/NIF'],
        unique: true,
        maxlength: [17, 'le numero d identification ne peut pas avoir plus de 17 chiffres.' ],
        minlength: [10, 'le numero d identification ne peut pas avoir moins de 10 chiffres.'],
        trim: false
    },
    surname: {
        type: String,
        required: [true, 'S il vous plait, veuillez ajouter le nom de famille'],
        unique: false,
        trim: true
    },
    lastname: {
        type: String, 
        required: [true, 'S il vous plait, veuillez ajouter le prenom'],
        unique: false,
        trim: true
    },
    sexe: {
        type: String,
        required: true,
        enum: [
            'Masculin',
            'Feminin'
          ]
    },
    birthday: {
        type: Date,
        required: false
    },
    birthPlace: {
        city: String,
        province: String,
        state: String,
        country: String
    },
    maritalStatus: {
        type: String,
        enum: ['Celibataire', 'Marié(e)', 'Divorcé(e)', 'Veuf(ve)', 'Union Libree', 'Séparé(e)'],
    },
    matrimoniaProperty: {
        type: String,
        enum: ['Communauté', 'Séparation']
    },
    //contact part
    address: {
        street: String,
        city: String,
        province: String,
        state: String,
        country: String
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    phone: {
        type: String,
        maxlength: [12, 'Phone number can not be longer than 12 characters']
    },
    //family details
    members: {
        type: mongoose.Schema.ObjectId,
        ref: 'famMemberSchema',
        required: false  
    },
    //studies 
    educationLevel: {
        required: false,
        type: String,
        enum: ['c0', 'c1', 'c2', 't1', 'u1', 'u2','u3']
    },
    profession: String,
    //Presents works
    enterprise: {
            type: mongoose.Schema.ObjectId,
            ref: 'Enterprise',
            required: false
        }
    
});

module.exports = mongoose.model('Assuree', AssureeSchema) || mongoose.models.Assuree;