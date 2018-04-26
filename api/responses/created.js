module.exports = function created(optionalData) {

  // Get access to `req` and `res`
  var req = this.req;
  var res = this.res;
  return res.status(201).send({success: true, data: optionalData});
};
