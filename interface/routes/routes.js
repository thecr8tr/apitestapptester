'use strict';

module.exports = function (app) {
    var controllers = require('../controllers/controllers');

    app.route('/')
        .get(function (req, res) {
            controllers.root(req, res);
        });

    app.route('/start')
        .get(function (req, res) {
            controllers.start(req, res);
        });
};
