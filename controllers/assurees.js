// jshint esversion:9
const Assuree = require('../models/Assurees');

// @descr       Get all ona Assurees
// @route       GET /archives/api/v1/assurees
// @access      Public
exports.getAssurees = async (req, res, next) => {
    const assurees = await Assuree.find();

    console.log(assurees);

    res.status(200).json({
        success: true,
        message: "successfullly get all assurees",
        data: assurees
    });

};

// @descr       Get a single ona assure
// @route       GET /archives/api/v1/assurees/:id
// @access      Public
exports.getAssuree = async (req, res, next) => {
    const assurees = await Assuree.find();

    console.log(assurees);

    res.status(200).json({
        success: true,
        message: "successfullly get all assurees",
        data: assurees
    });

};

// @descr       Create a new ona Assuree
// @route       POST /archives/api/v1/assurees
// @access      Private
exports.createAssuree = async (req, res, next) => {
    try {
        const assuree = await Assuree.create(req.body);
        res.status(201).json({
            message: "Assuree created sucessfully",
            success: true,
            data: assuree
        });
    } catch (error) {
        // console.log(error);
        res.status(400).json({
            success: false,
            message: error.errmsg
        });
    }
    
};

// @descr       Update an ona Assuree
// @route       PUT /archives/api/v1/assuree/:id
// @access      Private
exports.updateAssuree = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "Update an ona Assuree"
    });
};

// @descr       Delete an ona Assuree
// @route       DELETE /archives/api/v1/assurees
// @access      Private and Protected
exports.deleteAssuree = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "Delete an ona Assuree"
    });
};

