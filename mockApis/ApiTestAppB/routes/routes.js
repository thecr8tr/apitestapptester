'use strict';

module.exports = function(app, getTestEnumCallBack) {
    var controller = require('../controllers/controllers');

    app.route('/')
        .get(function(req, res) {
            // controller.getTestEnumCallback(getTestEnumCallBack);
            controller.root(req, res);
        })
};
