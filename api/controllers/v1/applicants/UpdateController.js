/**
 * ApplicantController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {


  //=====================================================Start Update==================================================
  //Current Applicant Update profile Start

  update:
  function (req,res) {
    var params = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      gender: req.body.gender,
      experience: req.body.experience
    }
    Applicant.update({id:req.currentApplicant.id}).set(params).exec(function (err,applicant) {
      if(err)
        res.badRequest(err);
      res.ok(applicant, [sails.__('successUpdate')]);
    })
  }
  //Current Applicant Update Profile End
//=======================================================End Update====================================================
};

