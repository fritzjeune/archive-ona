//  jshint esversion:9
 
 const express = require('express');

 const router = express.Router();

 const { getAssuree,
         getAssurees, 
         createAssuree, 
         updateAssuree, 
         deleteAssuree} = require('../controllers/assurees');

const {getWorks} = require('../controllers/works');


router
   .route('/')
   .get(getAssurees)
   .post(createAssuree);

router
   .route('/:id')
   .get(getAssuree)
   .put(updateAssuree)  
   .delete(deleteAssuree);

router
   .route('/:id/works')
   .get(getWorks);

module.exports = router;