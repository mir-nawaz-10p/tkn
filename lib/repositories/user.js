'use strict';

const models = require('../models');

const User = models.user;

module.exports = {
  findAll
};

function findAll() {
  return User.findAll();
}
