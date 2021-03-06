module.exports.routes = {

    'GET /': {
        skipAssets: true,
        fn: function(req, res) {
            res.redirect('/docs');
            // return res.send('Welcome to the HRM world.');
        }

    },
    //======================================================Start========================================================
    //Applicant Controller
    'POST /v1/applicants/signup': 'v1/applicants/RegisterController.signup',
    'POST /v1/applicants/login': 'v1/applicants/AuthController.login',
    'PUT /v1/applicants/profile': 'v1/applicants/ApplicantController.update',
    'POST /v1/applicants/password/create': 'v1/applicants/PasswordController.create',
    'PUT /v1/applicants/password/:token': 'v1/applicants/PasswordController.update',
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

    //Education Controller
    'POST /v1/applicants/education': 'v1/applicants/EducationController.create',
    'GET /v1/applicants/education': 'v1/applicants/EducationController.list',
    'PUT /v1/applicants/education/:id': 'v1/applicants/EducationController.update',
    'DELETE /v1/applicants/education/:id': 'v1/applicants/EducationController.delete',

    //Experience Controller
    'POST /v1/applicants/experience': 'v1/applicants/ExperienceController.create',
    'GET /v1/applicants/experience': 'v1/applicants/ExperienceController.list',
    'PUT /v1/applicants/experience/:id': 'v1/applicants/ExperienceController.update',
    'DELETE /v1/applicants/experience/:id': 'v1/applicants/ExperienceController.delete',

    //Job_applications Controller
    'POST /v1/application/apply/:id': 'v1/applicants/Job_applicationController.create',

    //Skill Controller
    'POST /v1/applicants/skills': 'v1/applicants/SkillController.create',
    'GET /v1/applicants/skills': 'v1/applicants/SkillController.list',
    'PUT /v1/applicants/skills/:id': 'v1/applicants/SkillController.update',
    'DELETE /v1/applicants/skills/:id': 'v1/applicants/SkillController.delete',

    //Auth Controller
    'POST /v1/company/login': 'v1/company/AuthController.login',

    //Company Controller
    'PUT /v1/company/profile': 'v1/company/CompanyController.update',
    'GET /v1/company/invitations/:token': 'v1/company/InvitationController.findByToken',
    'PUT /v1/company/invitations/:token': 'v1/company/InvitationController.update',
    'POST /v1/company/password/create': 'v1/company/PasswordController.create',
    'PUT /v1/company/password/:token': 'v1/company/PasswordController.update',

    //DepartmentController
    'POST /v1/company/departments': 'v1/company/DepartmentController.create',
    'GET /v1/company/departments': 'v1/company/DepartmentController.list',
    'GET /v1/company/departments/:id': 'v1/company/DepartmentController.show',
    'PUT /v1/company/departments/:id': 'v1/company/DepartmentController.update',
    'Delete /v1/company/departments/:id': 'v1/company/DepartmentController.delete',

    //DesignationController
    'GET /v1/company/departments/designations': 'v1/company/DesignationController.list',

    'POST /v1/company/departments/designations': 'v1/company/DesignationController.create',
    'PUT /v1/company/departments/designations/:id': 'v1/company/DesignationController.update',
    'GET /v1/company/departments/designations/:id': 'v1/company/DesignationController.show',
    'DELETE /v1/company/departments/designations/:id': 'v1/company/DesignationController.delete',

    //EmployeeController
    'POST /v1/company/employees': 'v1/company/EmployeeController.create',
    'GET /v1/company/employees': 'v1/company/EmployeeController.list',
    'PUT /v1/company/employees': 'v1/company/EmployeeController.update',
    'GET /v1/company/employees/:id': 'v1/company/EmployeeController.show',
    'GET /v1/company/me': 'v1/company/EmployeeController.me',
    'DELETE /v1/company/employees/:id': 'v1/company/EmployeeController.delete',


    //Job Interview Controller
    "POST /v1/company/job_applications/:job_application_id/job_interviews": 'v1/company/Job_interviewController.create',
    "PUT /v1/company/job_applications/:job_application_id/job_interviews/:id": 'v1/company/Job_interviewController.update',
    "GET /v1/company/job_applications/:job_application_id/job_interviews/": 'v1/company/Job_interviewController.list',
    "DELETE /v1/company/job_applications/:job_application_id/job_interviews/:id": 'v1/company/Job_interviewController.delete',
    "GET /v1/company/job_applications/:job_application_id/job_interviews/:id": 'v1/company/Job_interviewController.show',

    //Job Controller
    'POST /v1/company/jobs': 'v1/company/JobController.create',
    'PUT /v1/company/jobs/:id': 'v1/company/JobController.update',
    'GET /v1/company/jobs/:id': 'v1/company/JobController.show',
    'GET /v1/company/jobs': 'v1/company/JobController.list',
    'DELETE /v1/company/jobs/:id': 'v1/company/JobController.delete',

    //Jobtype Controller
    'POST /v1/company/job_types': 'v1/company/JobtypeController.create',
    'PUT /v1/company/job_types/:id': 'v1/company/JobtypeController.update',
    'DELETE /v1/company/job_types/:id': 'v1/company/JobtypeController.delete',
    'GET /v1/company/job_types/:id': 'v1/company/JobtypeController.show',
    'GET /v1/company/job_types/': 'v1/company/JobtypeController.list',

    //Leave type Controller
    'POST /v1/company/Leave_types': 'v1/company/Leave_typeController.create',
    'PUT /v1/company/Leave_types/:id': 'v1/company/Leave_typeController.update',
    'DELETE /v1/company/Leave_types/:id': 'v1/company/Leave_typeController.delete',
    'GET /v1/company/Leave_types/:id': 'v1/company/Leave_typeController.show',
    'GET /v1/company/Leave_types/': 'v1/company/Leave_typeController.list',

    //Leave Controller
    'POST /v1/company/leaves': 'v1/company/LeaveController.create',
    'PUT /v1/company/leaves/:id': 'v1/company/LeaveController.update',
    'DELETE /v1/company/leaves/:id': 'v1/company/LeaveController.delete',
    'GET /v1/company/leaves/:id': 'v1/company/LeaveController.show',
    'GET /v1/company/leaves/': 'v1/company/LeaveController.list',

    //Register Controller
    'POST /v1/company/signup': 'v1/company/RegisterController.signup',
}