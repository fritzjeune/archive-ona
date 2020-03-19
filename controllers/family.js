// jshint esversion:9
const Assuree = require('../models/Assurees');
const Family = require('../models/Family');

// @descr       create a family member for an assuree
// @route       GET /archives/api/v1/assurees/:id/dependencies
// @access      Public
exports.addFamily = async (req, res, next) => {
    try {
        const assuree = await Assuree.findOne({idNumber: req.params.id});
        // let id = assuree._id;
        console.log(assuree._id);
        req.body.assuree = `${assuree._id}`;

        const family = await Family.create(req.body);

        console.log(family);
    
        res.status(200).json({
            success: true,
            message: "successfullly added the family member",
            data: family
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "Can't add the family member or you sent a bad request"
        });
    }
};