'use strict';

const repo = require('../repositories');
const validator = require('../validator');

module.exports = {
  create
};

function create(payload) {
  return validator.validate(payload, validator.schemas.user.create)
	.then(() => {
  return repo.user.findAll(); // use create method
});
}
