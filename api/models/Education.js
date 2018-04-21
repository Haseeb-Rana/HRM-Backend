/**
 * Education.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'educations',
  attributes: {

    degree_level:{
      type:'string'
    },
    degree_type:{
      type:'string'
    },
    degree_title:{
      type:'string'
    },
    major_subjects:{
      type:'string'
    },
    location:{
      type:'string'
    },
    institution:{
      type:'string'
    },
    completion_year:{
      type:'string'
    },
    result_type:{
      type:'string'
    },
    applicant:
      {
        type: 'string',
        columnName: 'applicant_id',

      }
  },

};

