'use strict';

const controllers = require('../controllers');

module.exports = class {

  static setup(router) {

  /**
   * @api {post} api/user create user
   * @apiName createUser
   * @apiVersion 0.0.1
   * @apiGroup User
   *
   * @apiParam (Body) {String} name user name.
   * @apiParam (Body) {String} address user address.
   * @apiParam (Body) {String} contact user contact.
   *
   * @apiParamExample {json} Request-Example:
   * {
   *   "name": "black...",
   *   "address": "73798d...",
   *   "contact": "034...."
   * }
   *
   * @apiSuccess (200) {object} object header object
   * @apiSuccessExample {json} Success-Response:
   * {
   *   "message": "success"
   * }
   */
    router.post('/user', controllers.user.create);

  }

};
