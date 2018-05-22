/**
 * JobController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var params = {model: Job}
module.exports = {

  create: function (req, res) {
    params.body = {
      title: req.body.title,
      short_description: req.body.short_description,
      long_description: req.body.long_description,
      number_of_position: req.body.number_of_position,
      gender: req.body.gender,
      gender_preferences: req.body.gender_preferences,
      closing_date: req.body.closing_date,
      is_publish: req.body.is_publish,
      max_experience: req.body.max_experience,
      department: req.body.department,
      designation: req.body.designation,
      job_type_id: req.body.job_type_id,
      company: req.currentUser.company,
      created_By: req.currentUser.id
    };
    DbService.create(req, res, params);
  },

  update: function (req, res) {
    params.body = {
      title: req.body.title,
      short_description: req.body.short_description,
      long_description: req.body.long_description,
      number_of_position: req.body.number_of_position,
      gender: req.body.gender,
      gender_preferences: req.body.gender_preferences,
      closing_date: req.body.closing_date,
      is_publish: req.body.is_publish,
      max_experience: req.body.max_experience,
      department: req.body.department,
      designation: req.body.designation,
      job_type_id: req.body.job_type_id,
      company: req.currentUser.company,
      created_By: req.currentUser.id
    };
    params.condition = {
      id: req.params.id
    };
    DbService.update(req, res, params);
  },
  show: function(req,res)
  {
    params.condition = {
      id: req.params.id
    };
    DbService.find(req,res,params, function (data) {
      if(data)
        res.ok(data);
      else
        res.badRequest("not found");
    });
  },

  list:function (req, res) {
    params.condition = {
      company: req.currentUser.company
    };
    DbService.list(req, res, params);
  },

  delete: function (req, res) {
    params.condition = {
      id: req.params.id
    };
    DbService.delete(req, res, params);
  }
};
