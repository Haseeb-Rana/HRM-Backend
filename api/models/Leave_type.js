/**
 * Leave_type.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'leave_type',

  attributes: {
  type: {
    type : 'string',
    allowNull: false
  },
    days_per_year: {
    type: 'number',
      defaultsTo: 0,
      allowNull: false
    },
    company: {
    model: 'Company',
      columnName: "column_id"
    },
    created_By: {
    model: 'User',
      columnName: 'created_by_id'
    }
  },
};

