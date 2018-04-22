/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  'v1/applicants/UpdateController':{
    'update': 'applicants/isAuth',
  },

  'v1/applicants/EducationController': {
    'create': 'applicants/isAuth',
  },

  'v1/applicants/ExperienceController': {
    'create': 'applicants/isAuth',
  },

  'v1/company/CompanyController':{
    'update': 'isAuth',
  },
  'v1/company/EmployeeController':{
    'create': 'isAuth',
    'update': 'isAuth',
  },
  'v1/company/JobController':{
    'create': 'isAuth',
  }
};
