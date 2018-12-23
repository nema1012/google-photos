'use strict';

const apiConstants = require('../constants/api');

function getHeaders() {
  return {'Content-Type': 'application/json'};
}

class Transport {
  constructor(authToken) {
    this.authToken = authToken;
  }

  get(endpoint, params) {
    return fetch(apiConstants.HOST + endpoint + '?access_token=' + encodeURIComponent(this.authToken), {
      headers: getHeaders(),
      json: true,
      qs: params
    }).then((resp) => resp.json());
  }

  post(endpoint, params) {
    return fetch(apiConstants.HOST + endpoint  + '?access_token=' + encodeURIComponent(this.authToken), {
      method: 'POST',
      headers: getHeaders(),
      json: params
    }).then((resp) => resp.json());
  }

  _getAuth() {
    return {bearer: this.authToken};
  }
}

module.exports = Transport;
