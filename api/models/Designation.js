/**
 * Designation.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'designations',
  attributes: {
    name: {
      type: 'string',
    },
    department : {
      model: 'Department',
      columnName: 'department_id'
    },
    company: {
      model: 'Company',
      columnName: 'company_id',
    },
    created_by_id : {
      model: 'User',
    }
  },
};

