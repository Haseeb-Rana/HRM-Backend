/**
 * created.js
 *
 * A custom response.
 *
 * Example usage:
 * ```
 *     return res.created();
 *     // -or-
 *     return res.created(optionalData);
 * ```
 *
 * Or with actions2:
 * ```
 *     exits: {
 *       somethingHappened: {
 *         responseType: 'created'
 *       }
 *     }
 * ```
 *
 * ```
 *     throw 'somethingHappened';
 *     // -or-
 *     throw { somethingHappened: optionalData }
 * ```
 */

module.exports = function created(optionalData) {

  // Get access to `req` and `res`
  var req = this.req;
  var res = this.res;
  return res.status(201).send({success: true, data: optionalData});
};
