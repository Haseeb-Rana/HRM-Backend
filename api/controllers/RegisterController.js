/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  signup: function(req,res) {
    var userParams = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      gender: req.body.gender,
      email: req.body.email,
      password: req.body.password
    };
    User.create(userParams).fetch().exec(function(err, user) {
      if (err)
        res.badRequest(err);
      var params = {
        name: req.body.company.name,
        owner: user.id
      };
      Company.create(params).fetch().exec(function(err,company) {
        if (err)
          res.json(err);
        user.company = company;
        res.created(user);
      });
    });
  }
};

