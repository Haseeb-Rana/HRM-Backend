/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
module.exports = {

  login: function (req, res, next) {

    /**
     * this is param checking if they are provided
     */
    if (!_.has(req.body, 'email') || !_.has(req.body, 'password')) {
      return res.serverError("No field should be empty.");
    }
    const email = req.body.email;
    const password = req.body.password;

    //
    // /**
    //  * check if the username matches any email or phoneNumber
    //  */
    User.findOne({
      email: req.body.email
    }).exec(function callback(err, user) {
      if (err) return res.serverError(err);
      if (!user) return res.serverError("User not found, please sign up.");

      //check password
      bcrypt.compare(req.body.password, user.password, function (error, matched) {
        if (error) return res.serverError(error);

        if (!matched) return res.serverError("Invalid password.");

        //save the date the token was generated for already inside toJSON()

        var token = jwt.sign({id: user.id},'process.env.SECRET',{
          expiresIn: '10m'
        });
        //console.log(token);
        res.json(token);


        //return the token here
        //res.ok(token);
        //var matched = user.isAuthenticated(password);
        //if (!matched) return res.serverError("Invalid password.");
        //return the token here
        //res.ok(matched.generateToken());

      });
    });


  }
};

