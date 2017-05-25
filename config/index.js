'use strict';

const convict = require('convict');
const path = require('path');
const fs = require('fs');

const config = convict({
  env: {
    doc: 'Application Environment',
    format: ['develop', 'qa', 'prod'],
    default: 'develop',
    env: 'NODE_ENV'
  },
  api: {
    showExceptionToClient: {
      format: Boolean,
      default: false
    },
    port: {
      format: 'port',
      default: 3002
    }
  },
  postgres: {
    host: {
      format: String,
      default: 'localhost'
    },
    port: {
      format: 'port',
      default: 5432
    },
    database: {
      format: String,
      default: 'postgres'
    },
    username: {
      format: String,
      default: 'postgres'
    },
    password: {
      format: String,
      default: 'admin'
    }
  }
});

const env = config.get('env');
const configPath = path.join(__dirname, `./${env}.json`);
if (fs.existsSync(configPath)) {
  config.loadFile(configPath);
}
config.validate({ strict: true });

module.exports = config;
