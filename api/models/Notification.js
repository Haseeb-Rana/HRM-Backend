/**
 * Notification.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'notifications',
  attributes: {
    company: {
      model: 'Company',
      columnName: 'company_id'
    },
    sender: {
      model: 'User'
    },
    receipt: {
      model: 'User'
    },
    url: {
      type: 'string'
    },
    message: {
      type: 'string'
    },
    is_system: {
      type: 'boolean',
      defaultsTo: false
    },
    is_notify: {
      type: 'boolean',
      defaultsTo: true
    }
  },
};

