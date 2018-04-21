/**
 * ApplicantController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var nodemailer = require('nodemailer');
module.exports = {
  //================================================Start Create====================================================
  //Applicant Signup Start
  create:function(req,res)
  {
    var params = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      experience: req.body.experience

    }

    Applicant.create(params).fetch().exec(function (err,applicant)
    {
      if(err)
        res.badRequest(err);
      //===============================================Start Email Send================================================
      //Email Send to Applicant Email
      console.log(process.env.SMTP_EMAIL)

      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.SMTP_EMAIL,
          pass: process.env.SMTP_PASSWORD
        },
        tls: {
          // do not fail on invalid certs
          rejectUnauthorized: false
        }
      });
      const mailOptions = {
        from: process.env.SMTP_EMAIL, // sender address
        to: applicant.email, // list of receivers
        subject: 'NextHrm Email', // Subject line
        html: '<p>Welcome </p>' + applicant.first_name + 'To Next Hrm'// plain text body
      };
      transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          res.badRequest(err);
      });

      // End of Applicant email
      //==============================================End Email Send ===================================================
      res.created(applicant);

    })
  },
  //Applicant Signup End

  //=======================================================End Create =================================================

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


  },

  //Login End

  //====================================================End Login======================================================


  //=====================================================Start Update==================================================
  //Current Applicant Update profile Start

  update:
  function (req,res) {
    var params = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      gender: req.body.gender,
      experience: req.body.experience
    }

    Applicant.update({id:req.currentApplicant.id}).set(params).fetch().exec(function (err,applicant) {
      if(err)
        res.badRequest(err);
      res.created(applicant);
    })
  }
  //Current Applicant Update Profile End
//=======================================================End Update====================================================
};

