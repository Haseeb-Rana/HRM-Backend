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
  /**
   * @api {post} /v1/applicants/login Applicant login
   * @apiName login
   * @apiGroup Applicant
   *
   * @apiParam {String} email Email of the applicant.
   * @apiParam {String} password Password of the applicant.
   *
   * @apiSuccess {String} auth-token JWT of the User.
   */

  'POST /v1/applicants/signup': 'v1/applicants/RegisterController.signup',
   'POST /v1/applicants/login': 'v1/applicants/AuthController.login',
   'PUT /v1/applicants/profile': 'v1/applicants/UpdateController.update',
   'GET /v1/applicants/profile': 'v1/applicants/ShowController.show',
  'POST /v1/applicants/password/create': 'v1/applicants/PasswordController.create',
  'PUT /v1/applicants/password/:token': 'v1/applicants/PasswordController.update',

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

  'PUT /v1/company/profile': 'v1/company/CompanyController.update',
  'GET /v1/company/invitations/:token': 'v1/company/InvitationController.findByToken',
  'PUT /v1/company/invitations/:token': 'v1/company/InvitationController.update',
  'POST /v1/company/password/create': 'v1/company/PasswordController.create',
  'PUT /v1/company/password/:token': 'v1/company/PasswordController.update',
  //======================================================End==========================================================

  //======================================================Start========================================================

  //======================================================End==========================================================

  //======================================================Start========================================================
  //EmployeeController
  'POST /v1/employees': 'v1/company/EmployeeController.create',
  'GET /v1/company/employees': 'v1/company/EmployeeController.list',
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
