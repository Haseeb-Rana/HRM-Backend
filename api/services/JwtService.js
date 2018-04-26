var jwt = require("jsonwebtoken");
module.exports.generateToken = function (payload) {
  return jwt.sign(payload, process.env.SECRET, { expiresIn: '10m' });
};

module.exports.verify = function (req, res, token, done) {
  console.log("Token is: " + token);
  if (token) {
    jwt.verify(token, process.env.SECRET, function (err, decoded) {
      if (err)
        return res.unauthorized();
      else (decoded)
        done(decoded);
    });
  } else
    return res.unauthorized();
};
