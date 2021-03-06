// jshint esversion:9
const Assuree = require('../models/Assurees');
const Enterprise = require('../models/Enterprises');

// @descr       Get all ona Assurees
// @route       GET /archives/api/v1/assurees
// @access      Public
exports.getAssurees = async(req, res, next) => {
    try {
        // console.log(req.query);
        const assurees = await Assuree.find(req.query).populate({path: 'enterprise', select:'nif businessName businessCategory'}).
        populate('works').
        populate('family');

        // console.log(assurees);

        res.status(200).json({
            success: true,
            message: "successfullly get all assurees",
            count: assurees.length,
            data: assurees
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Can't get any assuree or you sent a bad request"
        });
    }
};

// @descr       Get a single ona assure
// @route       GET /archives/api/v1/assurees/:id
// @access      Public
exports.getAssuree = async(req, res, next) => {
    // console.log(req.query);

    try {
        const assuree = await Assuree.find(req.params).populate({path: 'enterprise', select:'nif businessName businessCategory'}).
        populate('works').
        populate('family');
        if (!assuree) {
            return res.status(404).json({
                success: false,
                message: "can't find this assuree in our database",
            });
        }
        // console.log(assuree);
        res.status(201).json({
            success: true,
            message: "successfullly get all assurees ",
            data: assuree
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "can't find this assuree in our database",
        });
    }
};

// @descr       Create a new ona Assuree
// @route       POST /archives/api/v1/assurees
// @access      Private
exports.createAssuree = async(req, res, next) => {
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
            message: error.message
        });
    }

};

// @descr       Update an ona Assuree
// @route       PUT /archives/api/v1/assuree/:id
// @access      Private
exports.updateAssuree = async(req, res, next) => {
    try {
        // console.log(req.params.nif, req.body);
        const id = req.params.nif;

        const assuree = await Assuree.findOneAndUpdate({ nif: id }, req.body, { new: true, runValidators: true }).populate('enterprise works');

        if (!assuree) {
            return res.status(200).json({
                success: false,
                message: "Cant find that Assuree"
            });
        }

        res.status(201).json({
            success: true,
            message: "Assuree Updated successfully",
            data: assuree
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        });
    }

};

// @descr       Delete an ona Assuree
// @route       DELETE /archives/api/v1/assurees
// @access      Private and Protected
exports.deleteAssuree = async(req, res, next) => {
    try {
        console.log(req.params.nif, req.body);
        // const id = req.params.nif;

        const assuree = await Assuree.findOne({ nif: req.params.nif });

        if (!assuree) {
            return res.status(200).json({
                success: false,
                message: "Cant find that Assuree"
            });
        }
        await assuree.remove();

        res.status(200).json({
            success: true,
            message: "Assuree deleted successfully",
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.errmsg,
        });
    }

};

exports.uploadPhoto = async(req, res, next) => {
    try {
        console.log('this is my picture');
        res.status(200).json({
            success: true,
            message: "picture added",
        });

    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.errmsg,
        });
    }

};