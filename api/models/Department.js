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
        unique: true,
        type: "string",
        required:true,
        allowNull: false
      },
    company:{
        model: 'Company',
        columnName:"company_id",
      required: true,
      allowNull: false
    },
    head_id :
      {
        model: 'User',
      },
    created_by_id:{
        model: 'User',
      required: true,
      allowNull: false
    },
    employees_count: {
        type: "number",
      defaultsTo: 0
    }
  },

  beforeValidation : function(values,cb) {
    values.name = values.name + values.company;
    cb();
  }

};

