'use strict';
require('dotenv').config();

let server;
const express = require('express'),
    app = express(),
    port = process.env.PORT || 3200,
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Routes
// const interfaceRoutes = require('./mockApis/ApiTestAppB/routes/routes');
// interfaceRoutes(app);

const mockApiTestAppBRoutes = require('./mockApis/ApiTestAppB/routes/routes');
let testEnum = 'a';
function getTestEnum() {
    return testEnum;
}
mockApiTestAppBRoutes(app, getTestEnum);

server = app.listen(port);
