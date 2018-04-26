const jwt = require('../services/JwtService');
module.exports = function (req, res, next) {
  jwt.verify(req, res , req.headers.authorization, function (payload) {
    console.log("Payload is: " + JSON.stringify(payload, null, 2));
    User.findOne(payload.id, function(error, currentUser) {
      if (error)
        return res.serverError(err);
      else if (!currentUser)
        return res.serverError("User not found");
      req.currentUser = currentUser;
      console.log("Current User is: " + JSON.stringify(req.currentUser, null, 2));
      next();
    });
  });
};

