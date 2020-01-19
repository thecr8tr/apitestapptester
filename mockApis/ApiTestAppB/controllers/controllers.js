'use strict';

// let getTestEnum;
// let testEnum = 'a';

// exports.getTestEnumCallback = function(callback) {
//     getTestEnum = callback;
// };

exports.root = function (req, res) {
    // if(getTestEnum) {
    //     testEnum = getTestEnum();
    // }

    // switch (testEnum) {
    //     case "a":
    res.send('Test End point Alpha');
    // break;
    // case "b":
    //     res.send('Test End point Beta');
    //     break;
    //
    // }
};
