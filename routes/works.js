// jshint esversion:9

 const express = require('express');

 const router = express.Router();

 const { getWork,
         getWorks, 
         createWork, 
         updateWork, 
         deleteWork} = require('../controllers/works');

 router
    .route('/')
    .get(getWorks)
    .post(createWork);

module.exports = router;
