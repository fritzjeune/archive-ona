// jshint esversion:9

const xlsxtojson = require('xlsx-to-json');

// const convert = xlsx2json('‪./test.xlsx', {
//     dataStartingRow: 1,
//     mapping: {
//         'surmane': 'A',
//         'firstname': 'B',
//         'phone': 'C',
//         'address': 'D',
//         'extras': 'E'
//     }
// }, function (err, jsonArray) {
//     if(err) throw err;

//     fs.writeFile("./test.json", jsonArray, 'utf8', function (err) {
//         if (err) {
//             return console.log(err);
//         }
    
//         console.log("The file was saved!");
//     }); 
// });


const convert = xlsxtojson({
    input: "./test.xlsx",
    output: "test.json",
    lowerCaseHeaders : true
}, function (err, result) {
    if (err) throw err;
    console.log(result);

});