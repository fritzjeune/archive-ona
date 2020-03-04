// jshint esversion:9

const Assuree = require('../models/Assurees');
const Enterprise = require('../models/Enterprises');

// @descr       Get all ONA Registered enterprises
// @route       GET /archives/api/v1/enterprises/
// @access      Public
exports.getEnterprises = async (req, res, next) => {
    try {
        const enterprises = await Enterprises.find();

        console.log(enterprises);
    
        res.status(200).json({
            success: true,
            message: "successfullly get all assurees",
            count: enterprises.length,
            data: enterprises
        });
    } catch (err) { 
        res.status(400).json({
            success: false,
            message: "Can't get any assuree or you sent a bad request"
        });
    }
};


// @descr       Get a single ONA Registered enterprises
// @route       GET /archives/api/v1/enterprises/:enterpriseId
// @access      Public


// @descr       create an enterprise
// @route       POST /archives/api/v1/enterprises/
// @access      Public
exports.createEnterprise = async (req, res, next) => {
    try {
        const enterprise = await Enterprise.create(req.body);
        res.status(201).json({
            message: "Assuree created sucessfully",
            success: true,
            data: enterprise
        });
    } catch (error) {
        // console.log(error);
        res.status(400).json({
            success: false,
            message: error.errmsg
        });
    }
    
};


// @descr       Update an ONA Registered enterprise
// @route       PUT /archives/api/v1/enterprises/:enterpriseId
// @access      Private


// @descr       Delete an ONA Registered enterprise
// @route       DELETE /archives/api/v1/enterprises/:enterpriseId
// @access      Private

