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

  'v1/applicants/ApplicantController':{
    'update': 'applicants/isAuth',
  },


  'v1/applicants/EducationController': {
    'create': 'applicants/isAuth',
    'list': 'applicants/isAuth',
    'update': 'applicants/isAuth',
    'delete': 'applicants/isAuth',
  },

  'v1/applicants/SkillController': {
    'create': 'applicants/isAuth',
    'list': 'applicants/isAuth',
    'update': 'applicants/isAuth',
    'delete': 'applicants/isAuth',
  },

  'v1/applicants/ExperienceController': {
    'create': 'applicants/isAuth',
    'list': 'applicants/isAuth',
    'update': 'applicants/isAuth',
    'delete': 'applicants/isAuth',
  },
  'v1/applicants/Job_applicantsController': {
    'create': 'applicants/isAuth',
    'list': 'applicants/isAuth',
    'update': 'applicants/isAuth',
    'delete': 'applicants/isAuth',
  },
  'v1/company/DepartmentController':{
    'list': 'isAuth',
    'create': 'isAuth',
    'update': 'isAuth',
    'delete': 'isAuth',
    'show': 'isAuth'

  },

  'v1/company/DesignationController':{
    'list': 'isAuth',
    'create': 'isAuth',
    'update': 'isAuth',
    'delete': 'isAuth',
    'show': 'isAuth'
  },

  'v1/company/JobtypeController':{
    'list': 'isAuth',
    'create': 'isAuth',
    'update': 'isAuth',
    'delete': 'isAuth',
    'show': 'isAuth'


  },

  'v1/company/CompanyController':{
    'update': 'isAuth',
  },

  'v1/company/EmployeeController':{
    '*': 'isAuth'
  },
  'v1/company/JobController':{
    'show': 'isAuth',
    'list': 'isAuth',
    'create': 'isAuth',
    'update': 'isAuth',
    'delete': 'isAuth'
  },
};
