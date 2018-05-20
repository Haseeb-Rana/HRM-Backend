module.exports.create = function (req, res, params) {
  console.log(JSON.stringify(params.body, null, 2));
  params.model.create(params.body).fetch().exec(function (err, data) {
    if(err)
      res.badRequest(err);
    res.created(data);
  });
};

module.exports.find = function (req, res, params, cb) {
  console.log("Params Condition: " + JSON.stringify(params.condition, null, 2));
  var populate = '';
  params.model.findOne(params.condition).populateAll().then(function (data) {
    console.log("Data is: " + JSON.stringify(data, null, 2));
    if(_.isFunction(cb))
      cb(data);
    else
      res.ok(data);
  }).catch(function (err) {
    res.badRequest(err);
  });
};

module.exports.list = function (req, res, params, cb) {
  console.log(JSON.stringify(params.body, null, 2));
  var populate = '';
  params.model.find(params.condition).sort('created_at DESC').then(function (data) {
    if(_.isFunction(cb))
      cb(data);
    else
      res.ok(data);
  }).catch(function (err) {
    res.badRequest(err);
  });
};

