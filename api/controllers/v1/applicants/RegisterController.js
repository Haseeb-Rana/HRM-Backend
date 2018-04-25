var params = {model: Applicant};
module.exports = {
  signup: function(req,res) {
    params.body = _.pick(req.body, ['first_name', 'last_name', 'email', 'password']);
    DbService.create(req, res, params);
  }
};

