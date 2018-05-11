/**
 * Job_Interview.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'job_interviews',
  attributes: {

    date:{
      type: 'ref',
      allowNull: false,
      columnName: 'timestamp'
    },
    place_of_interview:{
      type: 'string',
    },
    description:{
      type: 'string'
    },
    job: {
      model: 'Job',
      columnName: 'job_id'
    },
    applicant: {
      model: 'Applicant',
      columnName: 'applicant_id'
    },
    job_application: {
      model: 'Job_application',
      columnName: 'job_application_id'
    },
    company: {
      model: 'Company',
      columnName: 'company_id'
    },
    created_By: {
      model: 'User',
      columnName: "created_by_id",
    }
  },
};

