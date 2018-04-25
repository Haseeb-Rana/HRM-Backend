var mail = require('../../config/mailer');
module.exports.welcomeEmail = function (applicant) {
  const mailOptions = {
    to: applicant.email,
    subject: 'Welcome To HR Duty',
    html: '<p>Welcome </p>' + applicant.first_name + 'To HR Duty'
  };
  mail.send(mailOptions);
}
