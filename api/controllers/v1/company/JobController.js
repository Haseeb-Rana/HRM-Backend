/**
 * JobController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

create:function(req,res)
{
  var params = {
    title: req.body.title,
    created_By: req.currentUser.id,
    company: req.currentUser.company
  }

  Job.create(params).fetch().exec(function (err,job)
  {
    if(err)
      res.badRequest(err);
    res.created(job);

  })
}
};

