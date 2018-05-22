var bcrypt = require("bcryptjs");
var params = { model: User };
module.exports = {

    login: function(req, res, next) {
        if (!_.has(req.body, 'email') || !_.has(req.body, 'password')) {
            return res.badRequest("No field should be empty.");
        }
        params.condition = { email: req.body.email };
        DbService.find(req, res, params, function(user) {
            if (!user)
                return res.badRequest("User not found, please sign up.");
            // user.auth_token = JwtService.generateToken({ id: user.id });
            // res.ok(user, sails.__('successLogin'));
            bcrypt.compare(req.body.password, user.password, function(error, matched) {
                if (error) return res.badRequest(error);
                if (!matched) return res.badRequest("Invalid password.");
                user.auth_token = JwtService.generateToken({ id: user.id });
                res.ok(user, sails.__('successLogin'));
            });
        });
    }
};