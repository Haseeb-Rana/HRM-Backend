/**
 * JobtypeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var params = {model: Jobtype};
module.exports = {

create: function (req, res) {
  params.body = {
    name: req.body.name,
    company: req.currentUser.company,
    created_by_id: req.currentUser.id
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
      name: req.body.name
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

