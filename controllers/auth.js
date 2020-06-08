// jshint esversion:9
const User = require('../models/Users');
const Family = require('../models/Family');

// @descr       create a family member for an assuree
// @route       POST /archives/api/v1/assurees/:id/family
// @access      Public
exports.createUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body);

        console.log(user);
    
        res.status(200).json({
            success: true,
            message: "successfullly added the family member",
            data: user
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "user not created"
        });
    }
};