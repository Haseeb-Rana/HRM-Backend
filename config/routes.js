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
   'POST /applicants/signup': 'applicants/ApplicantController.create',
   'POST /applicants/login': 'applicants/ApplicantController.login',
   'PUT /api/v1/applicants/profile': 'applicants/ApplicantController.update',
  //======================================================End==========================================================
  //======================================================Start========================================================
  //Auth Controller
  'POST /login': 'AuthController.login',
  //======================================================End==========================================================

  //======================================================Start========================================================
  //Company Controller

  'PUT /company/update': 'CompanyController.update',
  //======================================================End==========================================================

  //======================================================Start========================================================
  //EmployeeController
  'POST /employees': 'EmployeeController.create',
  'PUT /employees': 'EmployeeController.update',
  //======================================================End==========================================================


  //======================================================Start========================================================
  //Job Controller
  'POST /jobs': 'JobController.create',
  //======================================================End==========================================================

  //======================================================Start========================================================
  //Register Controller
  'POST /company/signup': 'RegisterController.signup',
  //======================================================End==========================================================




};
