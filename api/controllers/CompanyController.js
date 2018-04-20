/**
 * CompanyController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  update: function (req,res) {

    var params = {
      name: req.body.name,
    }
    Company.update({id: req.currentUser.company}).set(params).fetch().exec(function (err,company) {
      if(err)
        res.badRequest(err);
      res.created(company);

    })
  }
};
