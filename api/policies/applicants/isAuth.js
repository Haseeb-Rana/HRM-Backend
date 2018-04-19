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

          if (!currentApplicant) return res.serverError("User not found");
          console.log("Current User is: " + JSON.stringify(currentApplicant, null, 2));
          req.currentApplicant = currentApplicant;
          console.log(req.currentApplicant);
          next();
          // res.send(currentUser);
          // return ok();

        });

        //return res.send({success: true, user: decoded});
      }
    });
  } else {
    return res.status(401).send({success: false, message: 'token invalid'});
  }
}

