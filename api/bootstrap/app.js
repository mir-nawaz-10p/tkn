'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const responseTime = require('response-time');
const serveStatic = require('serve-static');
const path = require('path');
const routes = require('../routes');
const lib = require('../../lib');
const middleware = require('../../lib/middleware');

module.exports = class {
  static start() {
    let app = express();
    app.disable('x-powered-by');
    app.disable('etag');
    app.use(responseTime());
    app.use(serveStatic(path.resolve(__dirname, '../', 'static'), {}));
    app.set('views', path.resolve(__dirname, '../'));

    app.use(bodyParser.json({ limit: 100000 }));
    app.use(bodyParser.urlencoded({
      extended: true
    }));

    routes.setup(app, express.Router());

    app.use(middleware.notFoundHandler);
    app.use(middleware.errorHandler);

    this.startHttpServer(app);
  }

  static startHttpServer(app) {
    this.httpServer = app.listen(3004, function() {
      console.log('start -------------');
    });
  }

  static stop(cb) {
    // close server gracefully
    this.httpServer.close(() => {
      cb();
    });
  }
};

