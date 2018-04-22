/**
 * RegisterController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
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

};

