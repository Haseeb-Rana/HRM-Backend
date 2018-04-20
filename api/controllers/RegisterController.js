/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var nodemailer = require('nodemailer');
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
      //=================================================================================================
      //Email Send to User

        var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'nexthrmofficial@gmail.com',
            pass: 'haseeb898'
          },
          tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
          }
        });
        const mailOptions = {
          from: 'nexthrmofficial@gmail.com', // sender address
          to: user.email, // list of receivers
          subject: 'NextHrm Email', // Subject line
          html: '<p>Welcome </p>' + user.first_name + 'To Next Hrm'// plain text body
        };
        transporter.sendMail(mailOptions, function (err, info) {
          if(err)
            console.log(err)
          else
            console.log(info);
        });

      // End of user email
      //=================================================================================================
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

