/**
 * Leave.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
module.exports = {
  tableName: 'leave',
  attributes: {
    start_date: {
      type: 'ref',
      columnType: 'date',
      allowNull: false
    },
    end_date: {
      type: 'ref',
      columnType: 'date',
      allowNull: false
    },
    description: {
      type: 'string'
    },
    company: {
      model: 'Company',
      columnName: 'company_id'
    },
    user: {
      model: 'User',
      columnName: 'user_id'
    },
    leave_type: {
      model: 'Leave_type'
    },
    status: {
      type: 'string',
      enum: ['pending','accepted','rejected']
    }
  },
};
