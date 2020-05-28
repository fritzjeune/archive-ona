// jshint esversion:9
const Assuree = require('../models/Assurees');
const Enterprise = require('../models/Enterprises');
const Requestform = require('../models/Requestforms');

// @descr       create a family member for an assuree
// @route       POST /archives/api/v1/requestforms
// @access      Public
exports.addFamily = async (req, res, next) => {
    try {
        // const assuree = await Assuree.findOne({nif: req.params.nif});
        // // let id = assuree._id;
        // console.log(assuree._id);
        // req.body.assuree = `${assuree._id}`;
        // req.body.assureeNif = req.params.nif;

        // const family = await Family.create(req.body);

        // console.log(family);
    
        res.status(200).json({
            success: true,
            message: "successfullly added the family member",
            data: "field added"
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "request form was not added, please verify data submitted"
        });
    }
};