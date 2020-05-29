// jshint esversion:9
const Assuree = require('../models/Assurees');
const Enterprise = require('../models/Enterprises');
const Requestform = require('../models/Requestforms');
const {errorHandler, errorMessage} = require('../middlewares/error');

// @descr       create a family member for an assuree
// @route       POST /archives/api/v1/requestforms
// @access      Public
exports.addRequest = async (req, res, next) => {
    try {

        const request = await Requestform.create(req.body);
        // const assuree = await Assuree.findOne({nif: req.params.nif});
        // // let id = assuree._id;
        // console.log(assuree._id);
        // req.body.assuree = `${assuree._id}`;
        // req.body.assureeNif = req.params.nif;

        // const family = await Family.create(req.body);
        // console.log(family);
        
        // errorMessage(200, "successfully added the request", true, request);
        res.status(200).json({
            success: true,
            message: "successfullly added the request",
            data: request
        });
    } catch (err) {
        res.status(200).json({
            success: true,
            message: err.message
        });
    }
};