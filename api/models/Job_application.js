/**
 * Job_application.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

   job:{
     unique: true,
     model: "job",
     columnName: "job_id"
   },
    applicant: {
     model: "applicant",
      columnName: "applicant_id"
    },
    company: {
     model: 'Company',
      columnName: 'company_id',
    }
  },
  beforeValidation : function(values,cb) {
    values.job = values.job+values.applicant;
    cb();
  }
};
