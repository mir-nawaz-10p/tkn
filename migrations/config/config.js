'use strict';

const postgres = require('../../config').get('postgres');

module.exports = {
  development: getApplicationConfig(),
  production: getApplicationConfig()
};

function getApplicationConfig() {
  return {
    username: postgres.username,
    password: postgres.password,
    database: postgres.database,
    host: postgres.host,
    dialect: 'postgres',
    migrationStorageTableName: 'migrationHistory',
    seederStorageTableName: 'seederData'
  };
}
