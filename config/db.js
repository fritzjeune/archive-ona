//jshint esversion:9


const mongoose = require('mongoose');
const dotenv = require('dotenv');

//load env files 
dotenv.config({ path: '.config/config.env'});

const atlasUri = 'mongodb+srv://dbFritz:ma$19rie@cluster0-begoj.mongodb.net/assurees?retryWrites=true&w=majority';
const localUri = 'mongodb://127.0.0.1:27017';

const connectDB = async () => {
    const conn = await mongoose.connect(localUri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }); 

    console.log(`mongoDB ConnecteD: ${conn.connection.host}`);

    
};

module.exports = connectDB;