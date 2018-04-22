/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  'GET /': {
    skipAssets: true,
    fn: function(req, res) {
      return res.send('Welcome to the HRM world.');
    }
  },
  //======================================================Start========================================================
  //======================================================End==========================================================

  //======================================================Start========================================================
  //Applicant Controller
   'POST /v1/applicants/signup': 'v1/applicants/RegisterController.create',
   'POST /v1/applicants/login': 'v1/applicants/AuthController.login',
   'PUT /v1/applicants/profile': 'v1/applicants/UpdateController.update',
   'GET /v1/applicants/profile': 'v1/applicants/ShowController.show',

  //Education Controller
  'POST /v1/applicants/education': 'v1/applicants/EducationController.create',
  //Experience Controller
  'POST /v1/applicants/experience': 'v1/applicants/ExperienceController.create',
  //======================================================End==========================================================
  //======================================================Start========================================================
  //Auth Controller
  'POST /v1/company/login': 'v1/company/AuthController.login',
  //======================================================End==========================================================

  //======================================================Start========================================================
  //Company Controller

  'PUT v1/company/update': 'v1/company/CompanyController.update',
  //======================================================End==========================================================

  //======================================================Start========================================================

  //======================================================End==========================================================

  //======================================================Start========================================================
  //EmployeeController
  'POST /v1/employees': 'v1/company/EmployeeController.create',
  'PUT /v1/employees': 'v1/company/EmployeeController.update',
  //======================================================End==========================================================



  //======================================================Start========================================================
  //Job Controller
  'POST v1/jobs': 'v1/company/JobController.create',
  //======================================================End==========================================================

  //======================================================Start========================================================
  //Register Controller
  'POST /v1/company/signup': 'v1/company/RegisterController.signup',
  //======================================================End==========================================================
};
