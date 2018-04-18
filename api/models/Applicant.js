/**
 * Applicant.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
var bcrypt = require('bcryptjs')
module.exports = {
  tableName:'applicants',
  attributes: {
    first_name: {
      allowNull: false,
      type: 'string'
    },
    last_name: {
      allowNull: false,
      type: 'string',
      required: true
    },
    email:{
      type:'string',
      allowNull:false,
      unique: true,
      required: true,
      isEmail:true
    },
    password:{
      type: 'string'
    }
  },

  //Generate Hash Password for Applicant
  beforeCreate: function (values, cb) {
    // Hash password
    bcrypt.hash(values.password, 10, function (err, hash) {
      if (err) return cb(err);
      values.password = hash;
      cb();
    });
  },
  //End Of Generate password for Applicant
};

