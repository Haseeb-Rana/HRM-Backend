var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
module.exports= function (req,res,next) {

  if (req.headers.authorization) {
    jwt.verify(req.headers.authorization, 'asdfg', function (err, decoded) {
      if (err){
        console.log(process.env.SECRET);
        return res.status(401).send({success: false, message: 'invalid'});
      }
      if (decoded) {

        Applicant.findOne(decoded.id, function(error, currentApplicant) {
          if (error) {
            return res.serverError(err);
          }

          if (!currentApplicant) return res.serverError("Applicant not found");
          console.log("Current Applicant is: " + JSON.stringify(currentApplicant, null, 2));
          req.currentApplicant = currentApplicant;
          next();
        });
      }
    });
  } else {
    return res.status(401).send({success: false, message: 'token invalid'});
  }
}

