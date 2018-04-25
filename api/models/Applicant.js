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
      type: 'string'
    },
    last_name: {
      type: 'string',
    },
    gender:{
      type: 'string'
    },
    email:{
      type:'string',
      unique: true,
      isEmail:true
    },
    password:{
      type: 'string'
    },
    time_zone:{
      type: 'string'
    },
    is_active:{
      type: 'boolean',
      defaultsTo: false
    },
    reset_password_token:{
      type: 'string'
    },
    reset_password_sent_at:{
      type:'ref',
      columnType:'timestamp'
    },
    confirmation_token:{
      type: 'string'
    },
    experience:{
      model: 'experience',
      columnName: 'experience_id'
    },
    education:{
      model: 'Education',
      columnName: 'education_id'
    },
    invitation_token:{
      type: 'string'
    },
    invitation_accepted_at:{
      type: 'number',
    }
  },

  beforeCreate: function (values, cb) {
    bcrypt.hash(values.password, 10, function (err, hash) {
      if (err) return cb(err);
      values.password = hash;
      cb();
    });
  },
  afterCreate: function (values, cb) {
    ApplicantMailer.welcomeEmail(values);
    cb();
  },
};

