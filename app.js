// jshint esversion: 9

const express = require("express");
const dotenv = require('dotenv');

const app = express();

//load env files 
dotenv.config({ path: '.config/config.env'});

app.get('/', function (req , res) {
    res.send("hello world!");
});

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
    console.log('App listening on port 3000!');
});

 