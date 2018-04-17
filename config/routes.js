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

  'POST /signup': 'RegisterController.Signup',
  'POST /login': 'AuthController.login',
  'POST /employees': 'EmployeeController.create',

  'POST /jobs': 'JobController.create',
};
