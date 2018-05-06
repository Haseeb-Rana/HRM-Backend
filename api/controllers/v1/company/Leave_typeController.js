/**
 * Leave_typeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var params = {model: Leave_type};
module.exports = {

  create: function (req, res) {
    params.body = {
      type: req.body.type,
      days_per_year: req.body.days_per_year,
      company: req.currentUser.company,
      created_By: req.currentUser.id
    };
    DbService.create(req, res, params);
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
  update: function (req, res) {

    params.condition = {
      id: req.params.id
    };
    params.body = {
      type: req.body.type,
      days_per_year: req.body.days_per_year,
    };
    DbService.update(req, res, params);
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

