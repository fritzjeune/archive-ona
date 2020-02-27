//  jshint esversion:9
 
 const express = require('express');

 const router = express.Router();

 const { getAssuree,
         getAssurees, 
         createAssuree, 
         updateAssuree, 
         deleteAssuree} = require('../controllers/assurees');

 router
    .route('/')
    .get(getAssurees)
    .post(createAssuree);

 router
    .route('/:id')
    .get(getAssuree)
    .put(updateAssuree)
    .delete(deleteAssuree);

 module.exports = router;