/**
 * PasswordController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var randtoken = require('rand-token');
var bcrypt = require('bcryptjs');
module.exports = {


  create: function (req,res) {

    var params = {
      email: req.body.email
    }
    if(!_.isEmpty(params.email))
    {
    Applicant.find({email: params.email}).exec(function (err,user) {
      if(err)
        res.badRequest(err);
      if(! _.isEmpty(user))
      {
          params.reset_password_token = randtoken.generate(20);
        Applicant.update({id: user.id}).set(params).exec(function(err,user)
        {
          if(err)
            res.badRequest(err);
          res.ok(user);
        });

      }
      else {
        res.badRequest("Email does't exist.");
      }
    })}
    else
      res.badRequest("Enter Email field should not be blank");
  },

  update:function(req,res)
  {
    const token = req.params.token;
    if(_.isEmpty(token))
      res.badRequest("Invalid Token or already accepted.");
    var params = _.pick(req.body, ['password','confirm_password']);
    if(_.isEqual(params.password, params.confirm_password) && (!_.isEmpty(params.password)) && (!_.isEmpty(params.confirm_password))) {
      Applicant.find({reset_password_token: token}).exec(function (err, user) {
        if (err)
          res.badRequest(err);
        if (!_.isEmpty(user)) {
          bcrypt.hash(params.password, 10, function (err, hash) {
            if (err)
              res.badRequest(err);
            params.password = hash;
            params.reset_password_token = '',

          Applicant.update({id: user.id}).set(params).exec(function (err, updatedUser) {
            if (err)
              res.badRequest(err);
            res.ok(updatedUser);
          });
          });
        }
      });
    }
    else
      res.badRequest("Password does't Match");}
};
