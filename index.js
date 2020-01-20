const request = require("request");
const StatsD = require('hot-shots');

const dogstatsd = new StatsD();
dogstatsd.increment('page.views')

console.log(process.env.API_TEST_APP_A_ROOT + "/");

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
