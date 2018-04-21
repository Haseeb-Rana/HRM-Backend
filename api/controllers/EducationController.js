/**
 * EducationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  create: function (req,res) {

    var params = {

      degree_level: req.body.degree_level,
      degree_type: req.body.degree_type,
      degree_title: req.body.degree_title,
      major_subjects: req.body.major_subjects,
      location: req.body.location,
      institution: req.body.institution,
      completion_year: req.body.completion_year,
      result_type: req.body.result_type,
      applicant: "1",
    }
    Education.create(params).fetch().exec(function (err,education) {
      if(err)
        res.badRequest(err);
      res.created(education);
    });
  }
};

