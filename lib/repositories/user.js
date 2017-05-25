'use strict';

const models = require('../models');

const User = models.User;

module.exports = {
  findAll
};

function findAll() {
  return User.findAll();
}
