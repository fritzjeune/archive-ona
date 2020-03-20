// jshint esversion:9
const Assuree = require('../models/Assurees');
const Family = require('../models/Family');

// @descr       create a family member for an assuree
// @route       POST /archives/api/v1/assurees/:id/family
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

// @descr       create a family member for an assuree
// @route       GET /archives/api/v1/assurees/:id/family
// @access      Public
exports.getFamily = async (req, res, next) => {
    try {
        const assuree = await Assuree.findOne({idNumber: req.params.id});
        let id = assuree._id;
        console.log(id);


        const family = await Family.find({assuree : id});

        const familyDp = await Family.find({assuree : id, isADependent: true});

        console.log(family);
    
        res.status(200).json({
            success: true,
            message: `successfullly get the family members for the Assuree ${req.params.id}`,
            familyCount: family.length, 
            dependentCount: familyDp.length,
            data: family
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: `can t get the family members for the Assuree ${req.params.id}`
        });
    }
};

// @descr       create a family member for an assuree
// @route       PUT /archives/api/v1/assurees/:id/family/:familyId
// @access      Public
exports.updateFamily = async (req, res, next) => {
    try {
        const assuree = await Assuree.findOne({idNumber: req.params.id});
        let id = assuree._id;
        console.log(id);


        const family = await Family.findOneAndUpdate({assuree : id, _id: req.params.familyId}, req.body, {new : true, runValidators: true});

        console.log(family);
    
        res.status(200).json({
            success: true,
            message: "successfullly updated the family member data",
            data: family
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "Can't add the family member or you sent a bad request"
        });
    }
};

// @descr       Delete a family member for an assuree
// @route       DELETE /archives/api/v1/assurees/:id/family/:familyId
// @access      Public
exports.deleteFamily = async (req, res, next) => {
    try {
        const assuree = await Assuree.findOne({idNumber: req.params.id});
        let id = assuree._id;
        console.log(id);


        const family = await Family.findOneAndDelete({assuree : id, _id: req.params.familyId});

        console.log(family);    
        if (!family) {
            return res.status(404).json({
                success: false,
                message: "Can't find the family member or you sent a bad request"
            });
        }
    
        res.status(200).json({
            success: true,
            message: "successfullly deleted the family member"
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err
        });
    }
};