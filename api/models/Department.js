/**
 * Department.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
    tableName: "departments",
  attributes: {
      name:{
        type: "string"
      },
    company:{
        model: 'Company',
        columnName:"company_id"
    },
    head_id :
      {
        model: 'User',
      },
    created_by_id:{
        model: 'User',
    }
  },

};

