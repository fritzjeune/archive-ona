// jshint esversion:9

const express = require('express');
const router = express.Router();

const { 
        createUser, 
        userLogin } = require('../controllers/auth.js');

router
    .route('/')
    .post(createUser);

router
        .route('/login')
        .get(userLogin);

module.exports = router;