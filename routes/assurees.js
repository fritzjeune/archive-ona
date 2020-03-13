//  jshint esversion:9
 
 const express = require('express');

 const router = express.Router();

 const { getAssuree,
         getAssurees, 
         createAssuree, 
         updateAssuree, 
         deleteAssuree} = require('../controllers/assurees');

// re-routing to work router 
const workRouter = require('./works');

router.use('/:assureeId/works', workRouter);

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