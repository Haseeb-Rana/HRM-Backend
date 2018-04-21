/**
 * Experience.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'experiences',
  attributes: {

    job_title:{
      type:'string',
    },
    company:{
      type:'string',
    },
    location:{
      type:'string',
    },
    time_period:{
      type:'ref',
      columnType:'date'
    },
    description:{
      type:'string',
    },
    experience:{
      type:'string'
    },
    applicant:{
      type: 'string',
      columnName: 'applicant_id',
    }

  },

};

