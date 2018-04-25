var nodemailer = require('nodemailer');
module.exports.send = function(mailOptions) {
  if(_.isUndefined(mailOptions.from))
    mailOptions.from = process.env.SMTP_EMAIL;
  var transporter = getTransporter();
  transporter.sendMail(mailOptions, function (err, info) {});
};

function getTransporter(){
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    }
  });
}
