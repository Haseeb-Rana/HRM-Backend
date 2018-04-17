/**
 * Job.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'jobs',
  attributes: {
    title:{
      type:'string'

    },
    created_By:{
      columnName:'created_by_id',
      model: 'user'
    },
    company:{
      columnName:"company_id",
      model: 'company'
    }

  },

};

