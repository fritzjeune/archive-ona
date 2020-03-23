// jshint esversion:9
const mongoose = require('mongoose');

const EnterpriseSchema = new mongoose.Schema({
    businessName: {
        type: String,
        unique: true,
        required: [true, 'Please enter the business Name']
    },
    nif: {
        type: String,
        required: [true, 'S il vous plait, veuillez ajouter votre NIF'],
        unique: true,
        maxlength: [10, 'le numero d identification doit avoir 10 chiffres.' ],
        minlength: [10, 'le numero d identification doit avoir 10 chiffres.' ],
        trim: false
    },
    businessType: String,
    businessCategory: String,
    createdAt: Date,
    socialAdress: {
        city: String,
        province: String,
        state: String,
        country: String,
        street: String,
        }

}, {
    toJSON: { virtuals : true},
    toObject: { virtuals: true}
}
);

// reverse populate
EnterpriseSchema.virtual('assurees', {
    ref: 'Assuree', // The model to use
    localField: '_id', // Find people where `localField`
    foreignField: 'enterprise', // is equal to `foreignField`
    // If `justOne` is true, 'members' will be a single doc as opposed to
    // an array. `justOne` is false by default.
    justOne: false
  });

module.exports = mongoose.models.Enterprise || mongoose.model('Enterprise', EnterpriseSchema);