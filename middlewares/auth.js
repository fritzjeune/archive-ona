// jshint esversion:9

const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const User = require('../models/Users');

const auth = async(req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        // const token = req.cookies.auth;
        
        const decoded = await jwt.verify(token, 'supersecret');
        console.log(decoded);
        const user = await User.findOne({ _id: decoded, 'tokens.token': token });
        // console.log(user);
        req.user = user;
    } catch (err) {
        return res.status(401).json({
            success: false,
            message: 'plaese Authenticate'
        });
    }


    next();
};

module.exports = auth;