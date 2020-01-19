exports.root = function (req, res) {
    res.send('<h1>Home</h1><p><a href="/start">Click to Start Testing</a></p>');
};

exports.start = function (req, res) {
    const request = require("request");

    request(process.env.API_TEST_APP_A_ROOT + "/", function (error, response, body) {
            if (error) {
                console.log('Something Went Wrong');
                console.log(error);
            } else {
                console.log('It all went right');
                console.log(body);
            }
        }
    );
};


// testEnum = 'b';

// request(process.env.API_TEST_APP_A_ROOT + "/", function (error, response, body) {
//         if (error) {
//             console.log('Something Went Wrong');
//             console.log(error);
//         } else {
//             console.log('It all went right');
//             console.log(body);
//         }
//
//         if (server) {
//             server.close();
//         }
//     }
// );
