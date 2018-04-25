module.exports.create = function (req, res, params) {
  console.log(JSON.stringify(params.body, null, 2));
  params.model.create(params.body).fetch().exec(function (err, data) {
    if(err)
      res.badRequest(err);
    res.created(data);
  });
}
