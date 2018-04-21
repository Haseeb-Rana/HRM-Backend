/**
 * EmployeeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var nodemailer = require('nodemailer');
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
    //========================================= Start Email Send========================================================
    //Email Send to User

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
      to: employee.email, // list of receivers
      subject: 'NextHrm Email', // Subject line
      html: '<p>Your Invitation Token is </p>' + employee.invitation_token// plain text body
    };
    transporter.sendMail(mailOptions, function (err, info) {
      if(err)
        res.badRequest(err);
      res.ok();

    });

    // End of user email
    //=============================================End of Email Send==============================================

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
