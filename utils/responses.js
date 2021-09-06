const utils = require('./index');
module.exports = {
  getErrorResponse: function(responseData) {
    const {status, message, error} = responseData;
    let resp = {};
    Object.assign(resp, response);
    if (!message) {
      message = utils.errors.genericError
    }
    resp.status = status || null
    resp.message = message || null
    resp.error = error || null
    delete resp.data;
    return resp;
  },

  getSuccessResponse: function(responseData) {
    const {status, data, message} = responseData;
    const resp = {};
    Object.assign(resp, response);
    resp.status = status || null;
    resp.success = true;
    resp.data = data || null;
    resp.message = message || null;
    if (!resp.data) {
      delete resp.data;
    }
    if (!resp.message) {
      delete resp.message;
    }
    return resp;
  }
}

const response = {
  success: false,
  message: '',
  data: {}
}
