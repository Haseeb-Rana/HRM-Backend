/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  'POST /Signup': 'RegisterController.Signup',
  'POST /Login': 'AuthController.login',
  'POST /Employees': 'EmployeeController.create',
};
