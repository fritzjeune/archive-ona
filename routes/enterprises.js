//  jshint esversion:9
 
const express = require('express');

const router = express.Router();

const { getEnterprises,
    createEnterprise } = require('../controllers/enterprises');

router.route('/').get(getEnterprises).post(createEnterprise);