/**
 * Company.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'companies',
  attributes: {
    name:{
      type: 'string'
    },
    owner:{
      model: 'User'
    },
    logo:{
      type: 'string'
    },
    is_active:{
      type: 'boolean',
      defaultsTo: false
    },
    establishment_date: {
      type: 'ref',
      columnType: 'date'
    }
  },

  afterCreate: function(company,done) {
    User.update({id: company.owner},{company: company.id}).fetch().exec(function(err,user) {
      if(err)
        return done(err);
      return done();
    });
  }
};

