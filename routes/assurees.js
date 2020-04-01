//  jshint esversion:9
 
 const express = require('express');

 const router = express.Router();

 const { getAssuree,
         getAssurees, 
         createAssuree, 
         updateAssuree, 
         deleteAssuree} = require('../controllers/assurees');

const {getWorks, createWork, getActualWorks} = require('../controllers/works');

const {getFamily, getFamilies, addFamily, updateFamily, deleteFamily} = require('../controllers/family');


router
   .route('/')
   .get(getAssurees)
   .post(createAssuree);

router
   .route('/:nif')
   .get(getAssuree)
   .put(updateAssuree)  
   .delete(deleteAssuree);

router
   .route('/:nif/works')
   .get(getWorks)
   .post(createWork);

router
   .route('/:nif/works/actual')
   .get(getActualWorks);

router
   .route('/:nif/family')
   .post(addFamily)
   .get(getFamily);

// router
//    .route('/families')
//    .get(getFamilies);

router
   .route('/:nif/family/:familyId')
   .put(updateFamily)
   .delete(deleteFamily);

module.exports = router;