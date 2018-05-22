/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var nodemailer = require('nodemailer');
module.exports = {

    //======================================================Start Signup================================================
    signup: function(req, res) {
        var userParams = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            gender: req.body.gender,
            email: req.body.email,
            password: req.body.password,
            invitation_token: req.body.invitation_token
        };
        User.create(userParams).fetch().exec(function(err, user) {
            if (err)
                res.badRequest(err);
            // //========================================= Start Email Send========================================================
            // //Email Send to User
            // var transporter = nodemailer.createTransport({
            //     service: 'gmail',
            //     auth: {
            //         user: process.env.SMTP_EMAIL,
            //         pass: process.env.SMTP_PASSWORD
            //     },
            //     tls: {
            //         // do not fail on invalid certs
            //         rejectUnauthorized: false
            //     }
            // });
            // const mailOptions = {
            //     from: process.env.SMTP_EMAIL, // sender address
            //     to: user.email, // list of receivers
            //     subject: 'HR Duty Email', // Subject line
            //     html: '<p>Welcome </p>' + user.first_name + 'To HR Duty' // plain text body
            // };
            // transporter.sendMail(mailOptions, function(err, info) {
            //     if (err)
            //         res.badRequest(err);
            //     res.ok();

            // });

            // End of user email
            //=============================================End of Email Send==============================================
            var params = {
                name: req.body.company.name,
                owner: user.id
            };
            Company.create(params).fetch().exec(function(err, company) {
                if (err)
                    res.badRequest(err);
                user.company = company;
                res.created(user);
            });
        });
    }
};