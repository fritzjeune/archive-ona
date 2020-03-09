//  jshint esversion:9
 
const express = require('express');

const router = express.Router();

const { getWorks,
        getWork, 
        createWork, 
        updateWork, 
        deleteWork} = require('../controllers/works');

router
   .route('/')
   .get(getWorks)
   .post(createWork);

// router
//    .route('/:id')
//    .get(getAssuree)
//    .put(updateAssuree)
//    .delete(deleteAssuree);

module.exports = router;