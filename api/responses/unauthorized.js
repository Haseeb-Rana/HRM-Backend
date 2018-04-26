module.exports = function unauthorized(optionalData) {
  var req = this.req;
  var res = this.res;
  return res.status(401).send({success: false, errors: ['Authorization failed.']});
};
