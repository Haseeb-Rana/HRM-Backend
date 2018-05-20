var jwt = require("jsonwebtoken");
module.exports.generateToken = function(payload) {
    return jwt.sign(payload, process.env.SECRET, { expiresIn: 60 * 60 * 60 * 60 });
};

module.exports.verify = function(req, res, token, done) {
    console.log("Token is: " + token);
    console.log("Headers is: " + JSON.stringify(req.headers, null, 2))
    if (token) {
        jwt.verify(token, process.env.SECRET, function(err, decoded) {
            if (err)
                return res.unauthorized();
            else(decoded)
            done(decoded);
        });
    } else
        return res.unauthorized();
};