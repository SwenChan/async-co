'use strict';
const mapLimit = require('./mapLimit');

module.exports = function * (coll, iteratee) {
  return yield mapLimit(coll, 1, iteratee);
};