// jshint esversion:9

// @descr       Get all ona Assurees
// @route       GET /archives/api/v1/assurees
// @access      Public
exports.getAssurees = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "get a list of all ona assurees"
    });

    // next();
};

// @descr       Get a single ona assure
// @route       GET /archives/api/v1/assurees/:id
// @access      Public
exports.getAssuree = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "get a single ona assuree"
    });

};

// @descr       Create a new ona Assuree
// @route       POST /archives/api/v1/assurees
// @access      Private
exports.createAssuree = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "Create a new ona Assuree"
    });
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

