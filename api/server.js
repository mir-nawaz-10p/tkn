'use strict';

// begin app profiling
require('newrelic');

const bootstrap = require('./bootstrap');

// start app
bootstrap.app.start();

// stop app
let shutdown = () => {
  bootstrap.app.stop(() => {
    process.exit();
  });
  setTimeout(function() {
    process.exit();
  }, 10000);
};

// cleanup events
process.on('SIGTERM', shutdown); // ctrl c
process.on('SIGINT', shutdown); // ctrl z
process.on('uncaughtException', (err) => {
  console.log(err.stack);// eslint-disable-line
});
