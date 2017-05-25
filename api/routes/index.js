'use strict';

module.exports = class {

  /**
   * @apiGroup Body request.body body parameters
   */
  /**
   * @apiGroup query req.query query
   */

  static setup(app, router) {

    // **** User Routes ******* //
    require('./user').setup(router);

    app.use('/api', router);

  }
};
