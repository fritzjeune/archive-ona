//jshint esversion:9

const mongoose = require('mongoose');

const AssureeSchema = new mongoose.Schema({
    idNumber: {
        type: number,
        required: [true, 'S il vous plait, veuillez ajouter votre CIN/NIF'],
        unique: true,
        maxlength: [17, 'le numero d identification ne peut pas avoir plus de 17 chiffres.' ],
        minlength: [10, 'le numero d identification ne peut pas avoir moins de 10 chiffres.'],
        trim: true
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
        required: true
    },
    birthPlace: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        maxlength: [20, 'Phone number can not be longer than 20 characters']
    },
    
});