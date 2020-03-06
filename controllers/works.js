// jshint esversion:9
const Assuree = require('../models/Assurees');

// @descr       Get all ona Assurees
// @route       GET /archives/api/v1/assurees
// @access      Public
exports.getWorks = async (req, res, next) => {
    try {
        const works = await Works.find();

        console.log(works);
    
        res.status(200).json({
            success: true,
            message: "successfullly get all works",
            count: works.length,
            data: works
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "Can't get any works or you sent a bad request"
        });
    }
};

// @descr       Get a single ona assure
// @route       GET /archives/api/v1/assurees/:id
// @access      Public
// exports.getAssuree = async (req, res, next) => {
//     console.log(req.params.id);

//         try {
//             const assuree = await Assuree.findOne({idNumber : req.params.id}).populate('enterprise');
//             if (!assuree) {
//                 return res.status(404).json({
//                     success: false,
//                     message: "can't find this assuree in our database",
//                 });
//             }
//             console.log(assuree);
//             res.status(201).json({
//                 success: true,
//                 message: "successfullly get all assurees ",
//                 data: assuree
//             });
//         } catch (err) {
//             res.status(404).json({
//                 success: false,
//                 message: "can't find this assuree in our database",
//             });
//         }
// };

// @descr       Create a new ona Assuree
// @route       POST /archives/api/v1/assurees
// @access      Private
exports.createWork = async (req, res, next) => {
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
            message: error.errmsg
        });
    }
    
};

// @descr       Update an ona Assuree
// @route       PUT /archives/api/v1/assuree/:id
// @access      Private
// exports.updateAssuree = async (req, res, next) => {
//     try {
//         console.log(req.params.id, req.body);
//     const id = req.params.id;
    
//     const assuree = await Assuree.findOneAndUpdate({idNumber : id}, req.body, {new: true, runValidators: true}).populate('enterprise');

//     if(!assuree) {
//         return res.status(200).json({
//             success: false,
//             message: "Cant find that Assuree"
//         });
//     }

//     res.status(200).json({
//         success: true,
//         message: "Assuree Updated successfully",
//         data: assuree
//     });
//     } catch (err) {
//         res.status(200).json({
//             success: true,
//             message: err.errmsg
//         });
//     }
    
// };

// // @descr       Delete an ona Assuree
// // @route       DELETE /archives/api/v1/assurees
// // @access      Private and Protected
// exports.deleteAssuree = async (req, res, next) => {
//     try {
//         console.log(req.params.id, req.body);
//     const id = req.params.id;
    
//     const assuree = await Assuree.findOneAndDelete({idNumber : id});

//     if(!assuree) {
//         return res.status(200).json({
//             success: false,
//             message: "Cant find that Assuree"
//         });
//     }

//     res.status(200).json({
//         success: true,
//         message: "Assuree deleted successfully",
//     });
//     } catch (err) {
//         res.status(200).json({
//             success: false,
//             message: err.errmsg,
//         });
//     }
    
// };

