var params = {model: Job_Interview};
var params1 = {model: Job_application};
module.exports = {
  create: function (req, res) {
    const id = req.params.job_application_id;
    if (!_.isEmpty(id)) {
      params1.condition = {
        id: req.params.job_application_id
      };
      DbService.find(req, res, params1, function (job_application) {
        if (job_application!== undefined) {
          params.body = {
            date: Date.now(),
            place_of_interview: req.body.place_of_interview,
            description: req.body.description,
            job: job_application.job.id,
            applicant: job_application.applicant.id,
            job_application: job_application.id,
            company: job_application.company.id,
            created_By: req.currentUser.id
          };
          DbService.create(req, res, params);
        }
        else
          res.badRequest("Not Found");
      })
    }
    else
      res.badRequest("Enter job applicant id");
  },

  update: function (req, res) {
    const id = req.params.job_application_id;

    if (!_.isEmpty(id)) {
      params.condition = {
        id: req.params.id,
        job_application: req.params.job_application_id
      };
          DbService.find(req, res, params, function (job_interview) {
            if (job_interview !== undefined) {
              params.body = {
                date: Date.now(),
                place_of_interview: req.body.place_of_interview,
                description: req.body.description
              };
              DbService.update(req, res, params);
            }
            else
              res.badRequest("Invalid Job Interview");
          });
        }
    else
      res.badRequest("Enter job applicant id");
  },
  show: function (req, res) {
    params.condition = {
      id: req.params.id,
      job_application: req.params.job_application_id
    };
    DbService.find(req, res, params);
  },
  list: function (req, res) {
    params.condition = {
      job_application: req.params.job_application_id
    };
    DbService.list(req, res, params);
  },
  delete: function (req, res) {
    params.condition = {
      id: req.params.id,
      job_application: req.params.job_application_id
    };
    DbService.delete(req, res, params);
  }
};
