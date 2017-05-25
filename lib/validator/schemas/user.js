'use strict';

let create = {
  properties: {
    name: {
      required: true,
      type: 'string',
      minLength: 1,
      messages: {
        required: 'name is missing',
        type: 'name must be of type string',
        minLength: 'name is missing'
      }
    },
    address: {
      required: true,
      type: 'string',
      messages: {
        required: 'address is missing',
        type: 'address must be of type string'
      }
    },
    contact: {
      required: true,
      type: 'string',
      messages: {
        required: 'contact is missing',
        type: 'contact must be of type string'
      }
    }
  }
};

module.exports = {
  create
};
