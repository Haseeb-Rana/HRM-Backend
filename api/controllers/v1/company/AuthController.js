var bcrypt = require("bcryptjs");
var params = { model: User };
module.exports = {

  login: function (req, res, next) {
    if (!_.has(req.body, 'email') || !_.has(req.body, 'password')) {
      return res.serverError("No field should be empty.");
    }
    params.condition = { email: req.body.email };
    DbService.find(req, res, params, function (user) {
      if (!user)
        return res.serverError("Applicant not found, please sign up.");
      bcrypt.compare(req.body.password, user.password, function (error, matched) {
        if (error) return res.serverError(error);
        if (!matched) return res.serverError("Invalid password.");
        user.auth_token = JwtService.generateToken({id: user.id});
        res.ok(user, sails.__('successLogin'));
      });
    });
  }
};

