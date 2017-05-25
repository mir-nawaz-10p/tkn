'use strict';

const lib = require('../../lib');

module.exports = class {

  static create(req, res, next) {
    let payload = {
      name: req.body.name,
      address: req.body.address,
      contact: req.body.contact
    };
    return lib.facade.user.create(payload)
      .then((data) => res.respond(req, res, data))
      .catch(next);
  }
};
