/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
module.exports = {


  //========================================================Start Login===============================================
  //Login Start
  login: function (req, res, next) {

    /**
     * this is param checking if they are provided
     */
    if (!_.has(req.body, 'email') || !_.has(req.body, 'password')) {
      return res.serverError("No field should be empty.");
    }
    const email = req.body.email;
    const password = req.body.password;
    Applicant.findOne({
      email: req.body.email
    }).exec(function callback(err, applicant) {
      if (err) return res.serverError(err);
      if (!applicant) return res.serverError("Applicant not found, please sign up.");

      //check password
      bcrypt.compare(req.body.password, applicant.password, function (error, matched) {
        if (error) return res.serverError(error);

        if (!matched) return res.serverError("Invalid password.");

        //save the date the token was generated for already inside toJSON()

        var token = jwt.sign({id: applicant.id}, process.env.SECRET,{
          expiresIn: '10m'
        });
        res.json(token);
      });
    });
  }
  //Login End

  //====================================================End Login======================================================
};

