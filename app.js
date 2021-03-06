// jshint esversion: 9

const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

//load env files 
dotenv.config({ path: '.config/config.env' });

connectDB();

// routes files 
const assurees = require('./routes/assurees');
const enterprises = require('./routes/enterprises');
// const statusScanned = require('./routes/statusScanned');
const works = require('./routes/works');
const requestforms = require('./routes/requestforms');
const auth = require('./routes/auth');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`);

    next();
};

app.use(logger);
app.use(cookieParser());

// mount routes 
app.use('/archives/api/v1/assurees', assurees);
app.use('/archives/api/v1/enterprises', enterprises);
app.use('/archives/api/v1/works', works);
app.use('/archives/api/v1/requestforms', requestforms);
app.use('/archives/api/v1/auth', auth);




const PORT = process.env.PORT || 3030;

const server = app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});

//handle unhandle promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    //close the server and exit process
    server.close(() => process.exit(1));
});