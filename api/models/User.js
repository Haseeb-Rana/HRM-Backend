/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var randomstring = require("randomstring");
module.exports = {
  tableName: 'users',
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
    gender: {
      type: 'string',
    },
    email: {
      type:'string',
      allowNull:false,
      unique: true,
      required: true,
      isEmail:true
    },
    password: {
      allowNull: false,
      type: 'string',
      required: true
    },
    createdBy: {
      type: 'number',
      columnName: 'created_by_id'
    },
    image: {
      type: 'string'
    },
    time_zone: {
      type: 'string'
    },
    is_active: {
      type: 'boolean',
      defaultsTo: false
    },
    company: {
      model: 'Company',
      columnName:'company_id'
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
    invitation_token:{
      type: 'string'
    }

  },

  beforeCreate: function (values, cb) {
    // Hash password
    bcrypt.hash(values.password, 10, function (err, hash) {
      if (err) return cb(err);
      //values.invitation_token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      values.invitation_token = randomstring.generate({length:20});
      values.password = hash;
      cb();
    });
  },
  isAuthenticated: function(value) {
    bcrypt.compare(value, this.password, function (error, matched) {
      if (error) return false;
      return this;
    });
  },
  toJSON: function () {
    var obj = this;
    delete obj.password; //remove the password field when displaying the user model object
    return obj;
  },
  generateToken: function () {
    return jwt.sign(this.toJSON(),"process.env.SECRET",{expiresIn: '10m'});
  }

};

