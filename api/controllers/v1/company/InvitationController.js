/**
 * TokenController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
module.exports = {

  findByToken: function (req,res) {
    const token = req.params.token;
    console.log(token);
    if(_.isEmpty(token))
      res.badRequest("Invalid Token or already accepted.");
    User.find({invitation_token: token}).exec( function (err,user) {
      if(err)
        res.badRequest(err);
      if(user)
        res.ok(user);
      else
        res.badRequest("Invalid Token or already accepted.");
    })
  },
  update: function (req, res) {
    const token = req.params.token;
    if(_.isEmpty(token))
      res.badRequest("Invalid Token or already accepted.");
    var params = _.pick(req.body, ['first_name', 'last_name', 'password', 'gender']);
    params.invitation_token = '';
    params.invitation_accepted_at = Date.now();
    User.find({invitation_token: token}).exec( function (err, user) {
      if(err)
        res.badRequest(err);
      if(!_.isEmpty(user)){
          User.update({id: user.id}).set(params).exec(function (err, updateUser) {
            if(err)
              res.badRequest(err);
            res.ok(updateUser, 'Successfully Invitation accepted.')
          })
      }
      else
        res.badRequest("Invalid Token or already accepted.");
    })
  }
};
