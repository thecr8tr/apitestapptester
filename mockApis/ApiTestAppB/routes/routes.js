'use strict';

module.exports = function(app, getTestEnumCallBack) {
    var test = require('../controllers/controllers');

    app.route('/')
        .get(function(req, res) {
            test.getTestEnumCallback(getTestEnumCallBack);
            test.testa(req, res);
        })
};
