'use strict';

const repo = require('../repositories');

module.exports = {
  findAll
};

function findAll() {
  return repo.user.findAll();
}
