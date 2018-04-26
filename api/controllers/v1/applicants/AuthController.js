
const bcrypt = require("bcryptjs");
var params = { model: Applicant };
module.exports = {

  login: function (req, res, next) {
    if (!_.has(req.body, 'email') || !_.has(req.body, 'password')) {
      return res.serverError("No field should be empty.");
    }
    const email = req.body.email;
    const password = req.body.password;
    params.condition = { email: email };
    DbService.find(req, res, params, function (applicant) {
      if (!applicant)
        return res.serverError("Applicant not found, please sign up.");
      bcrypt.compare(password, applicant.password, function (error, matched) {
        if (error) return res.serverError(error);
        if (!matched) return res.serverError("Invalid password.");
        applicant.auth_token = JwtService.generateToken({id: applicant.id});
        res.ok(applicant, sails.__('applicant.successLogin'));
      });
    });
  }
};

