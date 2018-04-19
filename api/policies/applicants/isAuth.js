var jwt = require("jsonwebtoken");
module.exports= function (req,res,next) {

  if (req.headers.authorization) {
    jwt.verify(req.headers.authorization, 'asdfg', function (err, decoded) {
      if (err){
        return res.status(401).send({success: false, message: 'invalid'});
      }
      if (decoded) {
        console.log(decoded.id);
        Applicant.find(decoded.id).fetch().exec(function(error, currentApplicant) {
          if (error) {
            console.log(JSON.stringify(currentApplicant,null,2));
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

