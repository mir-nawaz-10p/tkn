'use strict';

module.exports = (err, req, res, next) => {
  let failRes = _getFailedResponse(err, req);

  res.status(failRes.meta.code);
  res.json({ error: failRes });

  res.end();
};

function _getFailedResponse(err, req) {
  let error_message = '';
  err.status = err.status ? err.status : 500;

  if (err.status === 500) {
    error_message = 'asdas';
  }
  else {
    error_message = err.message ? err.message : 'asada';
  }

  return {
    meta: {
      code: err.status,
      requestId: req.request_id,
      message: error_message,
      stack: err.stack
    }
  };
}

