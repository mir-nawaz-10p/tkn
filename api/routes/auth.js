'use strict';

const controllers = require('../controllers');

module.exports = class {

  static setup(router) {

  /**
   * @api {post} v1/auth Api Authorization
   * @apiName apiAuth
   * @apiVersion 1.0.0
   * @apiGroup auth
   *
   * @apiParam (Body) {String} key app key.
   * @apiParam (Body) {String} secret app secret.
   *
   * @apiParamExample {json} Request-Example:
   * {
   *   "key": "black...",
   *   "secret": "73798d..."
   * }
   *
   * @apiSuccess (200) {object} object header object
   * @apiSuccessExample {json} Success-Response:
   * {
   *   "Authorization": "1fccd58..."
   * }
   */
    router.post('/v1/auth', controllers.auth.generate);

  }

};
