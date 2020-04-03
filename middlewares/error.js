// jshint esversion:9

const errorHandler = (err, req, res, next) => {
    // log the error in the console 
    console.log(err);

    res.status(500).json({
        sucess: false,
        message: err.message
    });
};


module.exports = errorHandler;