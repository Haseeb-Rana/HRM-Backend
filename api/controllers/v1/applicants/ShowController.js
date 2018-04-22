/**
 * ShowController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  show: function (req,res) {

    Applicant.find().exec(function (err,applicant) {
      if(err)
        res.badRequest(err);
      res.ok(applicant);

    });

  }

};

