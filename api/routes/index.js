'use strict';

module.exports = class {

  /**
   * @apiGroup Body request.body body parameters
   */
  /**
   * @apiGroup query req.query query
   */

  static setup(app, router) {

    // **** Auth Routes ******* //
    require('./auth').setup(router);

    app.use(router);

  }
};
