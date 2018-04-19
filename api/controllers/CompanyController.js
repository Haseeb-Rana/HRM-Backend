/**
 * CompanyController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  update: function (req,res) {

    var params = {
      c_name: req.body.c_name,
    }

    Company.update({id:req.currentUser.company}).set(params).fetch().exec(function (err,company) {
      if(err)
        res.status(400).send(err);
      res.status(200).send(company);

    })

  }

};

