/**
 * Jobtype.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'job_type',
  attributes: {
    name: {
    type: 'string',
      allowNull: false
    },
    company: {
    model: 'Company',
      columnName: 'company_id'
    },
    created_by_id: {
    model: 'User'
    }
  },
};

