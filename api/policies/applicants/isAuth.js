module.exports= function (req, res, next) {

  JwtService.verify(req, res , req.headers.authorization, function (payload) {
    Applicant.findOne(payload.id, function(error, currentUser) {
      if (error)
        return res.serverError(err);
      else if (!currentUser)
        return res.serverError("User not found");
      console.log(req.currentUser);
      req.currentApplicant = currentUser;
      next();
    });
  });
}

