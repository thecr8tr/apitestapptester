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
