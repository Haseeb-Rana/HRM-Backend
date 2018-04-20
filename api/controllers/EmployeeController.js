/**
 * EmployeeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

create:function (req,res) {

  var params = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    gender: req.body.gender,
    email: req.body.email,
    password: req.body.password,
    createdBy: req.currentUser.id,
    company: req.currentUser.company
  }
  User.create(params).fetch().exec(function(err,employee)
  {
    if(err)
      res.badRequest(err);
    res.created(employee);
  })

},
  update: function (req,res) {
    var params = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      gender: req.body.gender
    }

    User.update({id: req.currentUser.id}).set(params).fetch().exec(function (err,employee) {
      if(err)
        res.badRequest(err);
      res.created(employee);
    })
  }
};
