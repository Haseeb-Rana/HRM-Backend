/**
 * Company.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'companies',
  attributes: {
    c_name:{
      type: 'string'
    },
    owner:{
      model: 'User'
      //via: 'id'
    }
  },


  afterCreate:function(value,res)
  {
    User.update({id: value.owner},{company: value.id}).fetch().exec(function cb(err,user)
    {
      if(err)
        res.json(err);
      res.json(user);
    })
  }
};

