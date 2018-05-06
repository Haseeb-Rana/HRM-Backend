/**
 * LeaveController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var params ={model: Leave};
module.exports = {

create: function (req, res) {
  params.body = {
    start_date: req.body.start_date,
    end_date: req.body.end_date,
    description: req.body.description,
    company: req.currentUser.company,
    user: req.currentUser.id,
    leave_type: req.body.leave_type,
    status: req.body.status
  };
  DbService.create(req, res, params);
},
  update: function (req, res) {
    params.body = {
      start_date: req.body.start_date,
      end_date: req.body.end_date,
      description: req.body.description,
      company: req.currentUser.company,
      user: req.currentUser.id,
      leave_type: req.body.leave_type,
      status: req.body.status
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

