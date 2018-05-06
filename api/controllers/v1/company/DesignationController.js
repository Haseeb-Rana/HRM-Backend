/**
 * DesignationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var params = {model: Designation};
var params1 = { model: Department};
module.exports = {

create: function (req, res) {
  params.body = {
    name: req.body.name,
    department: req.body.department,
    company: req.currentUser.company,
    created_by_id: req.currentUser.id
  };
  params1.condition = {
    id: params.body.department
  };
  DbService.find(req, res, params1, function (department) {
    if(department)
      DbService.create(req, res, params);
    else
      res.badRequest("Department Not Found");
  });
},

  update: function (req, res) {
  params.body = {
    name: req.body.name,
    department: req.body.department,
  };
  params.condition = {
    id: req.params.id
  };
  DbService.update(req, res, params);
  },

  show: function (req ,res) {

    params.condition = {
      id: req.params.id
    };
    DbService.find(req, res, params);
  },

  delete : function (req, res) {
  params.condition = {
    id: req.params.id
  };
  DbService.delete(req, res, params);
  }
};
