// jshint esversion:9

const EnterpriseSchema = new mongoose.Schema({
    businessName: String,
    identificationNumber: Number,
    businessType: String,
    businessCategory: String,
    createdAt: Date,
    street: String,
    city: String,
    province: String,
    state: String,
    country: String,
    
});

module.exports = mongoose.model('Enterprise', EnterpriseSchema);