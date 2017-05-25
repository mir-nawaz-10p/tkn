'use strict';

const lib = require('../../lib');

module.exports = class {

  static generate(req, res, next) {
    let payload = {
      key: req.body.key,
      secret: req.body.secret
    };
    return lib.helpers.auth.generateHeader(payload)
      .then((data) => res.respond(req, res, { Authorization: data }))
      .catch(next);
  }
};
