/**
 * ExperienceController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  create: function (req,res) {

    var params = {

      job_title: req.body.job_title,
      company: req.body.company,
      location: req.body.location,
      time_period: req.body.time_period,
      description: req.body.description,
      applicant: req.currentApplicant.id,
    }
    Experience.create(params).fetch().exec(function (err,experience)
    {
      if(err)
        res.badRequest(err);
      res.created(experience);
    });
  }
};

