// jshint esversion:9
const User = require('../models/Users');
const bcrypt = require('bcrypt');

// @descr       create a family member for an assuree
// @route       POST /archives/api/v1/assurees/:id/family
// @access      Public
exports.createUser = async(req, res, next) => {
    try {
        const user = await User.create(req.body);
        const token = await user.generateToken();
        // console.log(user);

        res.status(201).json({
            success: true,
            message: "successfullly created your account",
            data: { user, token }
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            success: false,
            message: err.message
        });
    }
};

// @descr       create a family member for an assuree
// @route       POST /archives/api/v1/assurees/:id/family
// @access      Public
exports.userLogin = async(req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        // console.log(user);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "user not found"
            });
        }

        if (!req.body.password) {
            return res.status(400).json({
                success: false,
                message: "you must enter a password"
            });
        } else {
            bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
                if (err) throw err;
                if (isMatch == false) {
                    return res.status(400).json({
                        success: false,
                        message: "password incorrect"
                    });
                } else {
                    try {
                        const token = user.generateToken();
                        return res.cookie('auth', token).send({ user, token });
                    } catch (e) {
                        return res.status(400).json({
                            success: false,
                            message: "login failed"
                        });
                    }
                }
            });
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "internal error"
        });
    }
};