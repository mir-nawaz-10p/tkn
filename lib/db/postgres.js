'use strict';
// https://tecadmin.net/install-postgresql-server-on-ubuntu/
// sudo -u postgres psql
// postgres=> alter user postgres password 'admin';
const Sequelize = require('sequelize');
const config = require('../../config');

const { host, port, database, username, password } = config.get('postgres');

const sequelize = new Sequelize(database, username, password, {
  host, port, dialect: 'postgres', logging: true
});

module.exports = sequelize;
