/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  Signup:function(req,res)
  {
    var userParams = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      gender: req.body.gender,
      email: req.body.email,
      password: req.body.password,
      createdBy: req.body.createdBy,

    }

    User.create(userParams).fetch()
          .exec(function newUser(err, user) {
              if (err)
                res.json(err);
              console.log(user);
              var params = {
                c_name: req.body.c_name,
                owner: user.id
              }
              Company.create(params).fetch().exec(function newComp(err, com) {
                if (err)
                  res.json(err);
                //res.json(com)
              });
            }
          );
  },
  create:function (req,res) {
    var userParams = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      gender: req.body.gender,
      email: req.body.email,
      password: req.body.password,
      createdBy: req.body.createdBy,

    }

    User.create(userParams).fetch().exec(function (err,user)
    {
      if(err)
        console.error(err);
      console.log(user);
      res.json(user);
    })

  }
};

