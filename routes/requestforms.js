// jshint esversion:9

const express = require('express');
const router = express.Router();

const { addRequest } = require('../controllers/requestforms');

router
    .route('/')
    .post(addRequest);

// router
//         .route('/:workId')
//         .get(getWork)
//         .delete(deleteWork)
//         .put(updateWork);

module.exports = router;