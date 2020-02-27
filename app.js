// jshint esversion: 9

const express = require("express");
const dotenv = require('dotenv');

// routes files 
const assurees = require('./routes/assurees');

const app = express();

const logger = (req , res, next) => {
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`);

    next();
};

app.use(logger);

// mount routes 
app.use('/archives/api/v1/assurees', assurees);


//load env files 
dotenv.config({ path: '.config/config.env'});

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});

 