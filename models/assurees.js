//jshint esversion:9

const mongoose = require('mongoose');


const AssureeSchema = new mongoose.Schema({
    nif: {
        type: String,
        required: [true, 'S il vous plait, veuillez ajouter votre NIF'],
        unique: true,
        maxlength: [10, 'le numero d identification doit avoir 10 chiffres.' ],
        minlength: [10, 'le numero d identification doit avoir 10 chiffres.' ],
        trim: false
    },
    passport: {
        type: String,
        required: [false, 'S il vous plait, veuillez ajouter votre PASSPORT'],
        unique: false,
        maxlength: [9, 'le numero de PASSPORT doit avoir 10 chiffres.' ],
        minlength: [9, 'le numero de PASSPORT doit avoir 10 chiffres.' ],
        trim: false
    },
    cin: {
        type: String,
        required: [false, 'S il vous plait, veuillez ajouter votre CIN'],
        unique: false,
        maxlength: [17, 'le numero de CIN doit avoir 10 chiffres.' ],
        minlength: [17, 'le numero de CIN doit avoir 10 chiffres.' ],
        trim: false
    },
    niu: {
        type: String,
        required: [false, 'S il vous plait, veuillez ajouter votre NIU'],
        unique: false,
        maxlength: [10, 'le numero d identification unique(NIU) doit avoir 10 chiffres.' ],
        minlength: [10, 'le numero d identification unique(NIU) doit avoir 10 chiffres.' ],
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
    //studies 
    educationLevel: {
        required: false,
        type: String,
        enum: ['c0', 'c1', 'c2', 't1', 'u1', 'u2','u3']
    },
    profession: String,
    assureeType: {
        type: String,
        enum: ['volontaire', 'enterprise'],
        required: true
    },
    //Presents works
    enterprise: {
            type: mongoose.Schema.ObjectId,
            ref: 'Enterprise',
            required: false
        },
    createdAt:{
        type: Date,
        default: Date.now
    },
    actualStatus: {
        type: String,
        enum: ['inArchive', 'Archived', 'inIdentification', 'inPrinting', 'cardPrinted', 'inAnnexe', 'cardDelivered']
    },
    updatedDate: {
        type: Date,
        default: Date.now
    }
    
}, {
    toJSON: { virtuals : true},
    toObject: { virtuals: true}
});

// reverse populate
AssureeSchema.virtual('works', {
    ref: 'Work', // The model to use
    localField: '_id', // Find people where `localField`
    foreignField: 'assuree', // is equal to `foreignField`
    // If `justOne` is true, 'members' will be a single doc as opposed to
    // an array. `justOne` is false by default.
    justOne: false
  });

  AssureeSchema.virtual('family', {
    ref: 'Family', // The model to use
    localField: '_id', // Find people where `localField`
    foreignField: 'assuree', // is equal to `foreignField`
    // If `justOne` is true, 'members' will be a single doc as opposed to
    // an array. `justOne` is false by default.
    justOne: false
  });

module.exports = mongoose.models.Assuree || mongoose.model('Assuree', AssureeSchema);
