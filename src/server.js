'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const morgan = require('morgan');
const attempts = require('./attempts');

module.exports.init = function (configs, db) {
    const app = express();
    app.use(compression());
    app.use(morgan(configs.logger.format));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    attempts.init(app, configs, db)

    app.use(function (err, req, res, next) {
        console.log(err);
        res.status(500).send(err);
    });

    return app;
};