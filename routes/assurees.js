//  jshint esversion:9
 
 const express = require('express');

 const router = express.Router();

 const { getAssuree,
         getAssurees, 
         createAssuree, 
         updateAssuree, 
         deleteAssuree} = require('../controllers/assurees');

const {getWorks, createWork} = require('../controllers/works');

const {getFamily, addFamily, updateFamily, deleteFamily} = require('../controllers/family');


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
   .route('/:nif/works')
   .get(getWorks)
   .post(createWork);

router
   .route('/:id/family')
   .post(addFamily)
   .get(getFamily);

router
   .route('/:id/family/:familyId')
   .put(updateFamily)
   .delete(deleteFamily);

module.exports = router;