// jshint esversion:9

const express = require('express');
const router = express.Router();

const { 
        createUser } = require('../controllers/auth.js');

router
    .route('/')
    .post(createUser);

// router
//         .route('/:workId')
//         .get(getWork)
//         .delete(deleteWork)
//         .put(updateWork);

module.exports = router;