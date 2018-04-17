/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
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
      required: true
    },
    email:{
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
    createdBy:{
      type: 'number',
      columnName: 'created_by_id'
    },
    company:{
      model: 'Company',
      columnName:'company_id'
    }
  },

  beforeCreate: function (values, cb) {
    // Hash password
    bcrypt.hash(values.password, 10, function (err, hash) {
      if (err) return cb(err);
      values.password = hash;
      cb();
    });
  },
  toJSON: function () {
    var obj = this;
    delete obj.password; //remove the password field when displaying the user model object
    return obj;
  },

};

