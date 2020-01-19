'use strict';
require('dotenv').config();

let server;
const express = require('express'),
    app = express(),
    port = process.env.PORT || 3200,
    routes = require('./mockApis/ApiTestAppB/routes/routes'),
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let testEnum = 'a';

function getTestEnum() {
    return testEnum;
}

routes(app, getTestEnum);

const request = require("request");


server = app.listen(port);

request(process.env.API_TEST_APP_A_ROOT  + "/", function (error, response, body) {
        if (error) {
            console.log('Something Went Wrong');
            console.log(error);
        } else {
            console.log('It all went right');
            console.log(body);
        }

        testEnum = 'b';

        request(process.env.API_TEST_APP_A_ROOT  + "/", function (error, response, body) {
                if (error) {
                    console.log('Something Went Wrong');
                    console.log(error);
                } else {
                    console.log('It all went right');
                    console.log(body);
                }

                if (server) {
                    server.close();
                }
            }
        );
    }
);



